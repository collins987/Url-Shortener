package main

import (
    "github.com/gin-gonic/gin"
    "math/rand"
    "net/http"
    "sync"
)

var urlStore = make(map[string]string)
var mu sync.Mutex

func shortenURL(c *gin.Context) {
    longURL := c.PostForm("url")
    shortID := generateShortID()
    
    mu.Lock()
    urlStore[shortID] = longURL
    mu.Unlock()

    c.JSON(http.StatusOK, gin.H{"short_url": "http://localhost:8080/" + shortID})
}

func redirectURL(c *gin.Context) {
    shortID := c.Param("shortID")

    mu.Lock()
    longURL, exists := urlStore[shortID]
    mu.Unlock()

    if !exists {
        c.JSON(http.StatusNotFound, gin.H{"error": "URL not found"})
        return
    }

    c.Redirect(http.StatusFound, longURL)
}

func generateShortID() string {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    result := make([]byte, 6)
    for i := range result {
        result[i] = letters[rand.Intn(len(letters))]
    }
    return string(result)
}

func main() {
    r := gin.Default()
    r.POST("/shorten", shortenURL)
    r.GET("/:shortID", redirectURL)
    r.Run(":8080")
}
