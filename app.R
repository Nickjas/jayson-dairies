#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)

# Define UI for application that draws a histogram
tweetExplorerUI <- function(id, tweet_div_id = "tweetExplorer-tweet", collapsed = FALSE, status = "info") {
    
    fluidRow(
        column(
            12,
            column(
                12,
                class = "col-md-push-9 col-md-3",
                box(
                    width = "6 col-md-12",
                    status = status,
                    solidHeader = TRUE,
                    title = "Options",
                    collapsible = TRUE,
                    
                    selectInput(
                        'view',
                        'Tweet Group',
                        c('Popular',
                          'Tips',
                          "Talks",
                          "Pictures",
                          "All")
                    ),
                    uiOutput('help_text'),
                    uiOutput('filters')
                ),
                column(
                    width = 6,
                    class = "col-md-12",
                    id = tweet_div_id,
                    uiOutput("tweet")
                )
            ),
            box(
                width = "12 col-md-pull-3 col-md-9",
                status = "primary",
                DT::dataTableOutput('tweets'))
        )
    )
}

server <- function(input, output, session, all_tweets, tzone = "America/New_York") {
      
    
    tweets <-reactive({
        search_tweets('bbc',n=100) %>%
        
        mutate(created_at = lubridate::with_tz(created_at, 'UTC'))%>%
        transmute(Timestamp= created_at,User=screen_name,Tweet=text,RT=retweet_count,Fav=favorite_count,
                  Src=source,Mention=mentions_screen_name,Retweet=retweet_text)%>%
        arrange(desc(Timestamp))})
        
    x <- switch(
        input$view,
        'Popular' = tweets %>%
            arrange(desc(RT + Fav),
                    -map_int(Mention, length)),
        # 'Tips' = tweets %>% filter(relates_tip, !is_retweet),
        #'Talks' = all_tweets %>% filter(relates_session, !is_retweet),
        'Pictures' = tweets %>% filter(!is_retweet, !is.na(media_url)),
        tweets
    )
        
        
   
    
    output$help_text <- renderUI({
        req(input$view)
        switch(
            input$view,
            'Popular' = helpText(HTML("&#x1F4AF;"),  "Most popular (retweets + favs) first"),
            'Tips' = helpText(HTML("&#x1F4A1;"), "Original or quote tweets that mention a tip"),
            'Talks' = helpText(HTML("&#x1F393;"),  "Original or quote tweets that mention \"slides\", \"presentations\", etc."),
            'Pictures' = helpText(HTML("&#x1F4F8;"),  "Tweets that come with a picture"),
            'All' = helpText(HTML("&#x1F917;"), "All the tweets"),
            NULL
        )
    })
    
    
    
    
    
    output$plot <- DT::renderDataTable({
        tweets()
    }
    
    )
    
    output$tweet <- renderUI({
        req(tweets())
        x <- if (!is.null(input$tweets_rows_selected)) {
            tweets() %>%
                slice(input$tweets_rows_selected) %>%
                pmap_chr(get_tweet_blockquote) %>%
                HTML()
        } else {
            HTML('<blockquote>Choose a tweet from the table...</blockquote>')
        }
        
        tags$div(class = "tweet-item", x)
    })
}

# Define server logic required to draw a histogram


# Run the application 
shinyApp(ui = ui, server = server)
