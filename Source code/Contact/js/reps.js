/*  
        Julia Chen - work on Nov. 2, 2016
            MP Factory - SALES 

            work area - easy for modification, one central location to change the content 
                             once the menu is updated, the content page is also updated.
                             Last updated: Nov. 2, 2016
                             log 1: prepare the array
         Actionable items: 
         1. Move CSS code into a separate file (.css file), therefore, html will not mix with CSS code. 
         Much more easy to read. 
         2. Move International Rep title list to JavaScript code, easy to maintain. 
*/

/*
Nov. 2, 2016
Search using key: 
AK=
*/
function indexOf_StartsWith(a, key) {
    if (a == null || a.length == 0)
        return -1;

    var i = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i].startsWith(key))
            return i;
    }

    return -1;
}