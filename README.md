# ChatGPT-Copy-All-Chat-Bookmarklet
A Javascript bookmarklet that will copy the source contents of the current ChatGPT chat

A Simple JS bookmarlet that will copy the current chat content with the GPT Chat bot. 

## Using:
To use this bookmarklet, create a new bookmark in your browser and paste the code above as the URL.

## How Does it Work
1. Click on the bookmarklet.
2. click somewhere on the chat contents.
3. Once you click, it will copy the source of the page to the clipboard.
4. Paste it into a text editor and save as HTML. Once you open that file, you will be able to see all the chat history. 
5. For easier tracking, it adds the date and time for each time you run the bookmarklet.

## To-Dos
* currently it is looking for a class called _flex flex-col items-center text-sm h-full dark:bg-gray-800_ when looking at the code. I will try and keep the parent element up to date in this repo, but if its not updated, you will need to look at the source to determine which element is the parent for the outputs. 

This is not a perfect solution, but the best I can think of. 
