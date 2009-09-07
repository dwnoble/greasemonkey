// ==UserScript==
// @name           ProjectEulerHideSolvedByColumn
// @namespace      github.com/colonhyphenp
// @description    Hides the "Solved By" column in project euler
// @include        http://projecteuler.net/index.php?section=problems*
// ==/UserScript==

// This script hides numerical value in the "Solved By" column of the Project Euler Problems page.  
// It replaces the text with a link that can be clicked to show the original text in Javascript popup.

odd_problem_rows = document.getElementsByClassName('bg_table_row1')
even_problem_rows = document.getElementsByClassName('bg_table_row2')

for(i=0;i<odd_problem_rows.length;i++){
    original_text = document.getElementsByClassName('bg_table_row1')[i].cells[2].textContent
    document.getElementsByClassName('bg_table_row1')[i].cells[2].innerHTML="[<a href=\"\" onclick=\"alert('"+original_text+"');return false;\">show</a>]"
}

for(i=0;i<even_problem_rows.length;i++){
    original_text = document.getElementsByClassName('bg_table_row2')[i].cells[2].textContent
    document.getElementsByClassName('bg_table_row2')[i].cells[2].innerHTML="[<a href=\"\" onclick=\"alert('"+original_text+"');return false;\">show</a>]"
}
