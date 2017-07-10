#Notes
SinglePageApplication: we are no longer navigating between distinct HTML documents created by the remote webserver. Instead we are always dealing with a single HTML document and we are relying on JavaScript to change the set of components that the user sees on the screen.  
With ReactRouter we are no longer making a request to the server to get a webpage. ReactRouter intercepts changes to the URL, stops the user from navigating to a different page and instead displays a different set of components based on what the URL is.  
History package as part of ReactRouter. Browser communicates to the History library that the URL has changed, the library passes it on to the ReactRouter library. ReactRouter decides to display a new set of component depending on the new URL.  
Once ReactRouter has decided what set of components to display, delegates off to React the re-rendering of the components.  

Router to show or hide a child component depending on the URL.  
