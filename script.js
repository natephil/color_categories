$(function() {
    // sortable elements to be made sortable on page load
    var sortableElements = $(".sortable");

    // a clone of the "new category" drop zone
    var containerTemplate = $(".category-container").clone();

    // the main container where clones will be appended
    var mainDiv = $("#mainDiv");

    // on page load, pass all ".sortable" elements to the makeSortable() function
    makeSortable(sortableElements);

    // "Add New Category" button
    $("#btnAdd").click(function() {
        // get a new template - on its own, this isn't sortable yet as .sortable() hasn't been called on it
        var newContainer = containerTemplate.clone();

        // append to #mainDiv
        mainDiv.append(newContainer);

        // find the <ul> and pass it to the makeSortable() function
        makeSortable(newContainer.find(".sortable"));
    })

    // generic function which takes an element and applies jQuery's "sortable" functionality
    function makeSortable(element) {
        element.sortable({
            connectWith: ".connectedSortable",
            receive: function(event, ui) {
                $(this).css("background-color", "#fff");
            }
        }).disableSelection();
    }
    // take each <li> in the <ul> tag
    // then randomly shuffle them!
    var ul = document.querySelector('ul');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
})