$(function(){
    authorFollow();
    blogLike();
    copyArticle();
    copyCode();
    dropdownCopyArticle();
    getAuthorFollow();
    getBlogLike();
    getBlogLikeCount();
    postBlogLikeCount();
});

function authorFollow() {
    $(document).on("click", "[data-toggle=author-follow]", function(){
        let thisBtn = $(this);
        if (_uid == "0") {
            $('#loginModal').modal('show');
        } else {
            thisBtn.attr('disabled', 'disabled');
            $.ajax({
                type:'POST',
                url: "/data/authorfollow",
                data: {author_id: thisBtn.data('id')},
                success:function(response) {
                    // 
                    if (response.status === true) {
                        if(thisBtn.hasClass('following')) {
                            thisBtn.removeClass('following');
                        } else {
                            thisBtn.addClass('following');
                        }
                    }
                    thisBtn.removeAttr("disabled");
                }, 
                error:function() {
                    // 
                    thisBtn.removeAttr("disabled");
                }, 
                failed:function() {
                    // 
                    thisBtn.removeAttr("disabled");
                }
            });
        }
    });
}

function blogLike() {
    $(document).on("click", "[data-toggle=blog-like]", function(){
        let thisBtn = $(this);
        if (_uid == "0") {
            $('#loginModal').modal('show');
        } else {
            thisBtn.attr('disabled', 'disabled');
            $.ajax({
                type:'POST',
                url: "/data/bloglike",
                data: {
                    blog_id: thisBtn.data('id'),
                    type: thisBtn.data('type')
                },
                success:function(response) {
                    // 
                    if (response.status === true) {
                        thisBtn.children('i').toggleClass("bx-like bxs-like");
                        if (thisBtn.hasClass('liked')) {
                            thisBtn.removeClass('liked');
                        } else {
                            thisBtn.addClass('liked');
                        }
                    }
                    thisBtn.removeAttr("disabled");
                }, 
                error:function() {
                    // 
                    thisBtn.removeAttr("disabled");
                }, 
                failed:function() {
                    // 
                    thisBtn.removeAttr("disabled");
                }
            });
        }
    });
}

function copyArticle() {
    // Button Copy Article
    $(document).on("click", '.btn-copy-article', function() {
        let url = $(this).attr('data-url')
        const tempInput = document.createElement("input");
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
}

function copyCode() {
    // Button copy code
    $(document).on("click", '.btn-code-copy', function() {
        let datacode = $(this).closest('.custom-card-code').find('textarea');
        datacode.select();
        document.execCommand("copy");

        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
    });
}

function dropdownCopyArticle() {
    $(document).on("click", '.dropdown-copy-article', function() {
        let url = $(this).attr('data-url')
        const tempInput = document.createElement("input");
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
}

function getAuthorFollow() {
    if (_uid != "0") {
        $('.btn-follow.following').removeClass('following');
        $.ajax({
            type:'GET',
            url: "/data/authorfollow",
            success:function(response) {
                // 
                if (response.status === true) {
                    $.each(response.data, function(e, data){
                        let thisBtn = $('.btn-follow[data-id='+ data.author_id +']');
                        if(thisBtn.hasClass('following')) {
                            // thisBtn.removeClass('following');
                        } else {
                            thisBtn.addClass('following');
                        }
                    });
                }
            }, 
            error:function() {
                // 
            }, 
            failed:function() {
                // 
            }
        });
    }
}

function getBlogLike() {
    if (_uid != "0") {
        $('.blog-list-like.liked').removeClass('liked');
        $.ajax({
            type:'GET',
            url: "/data/bloglike",
            success:function(response) {
                // 
                $.each(response.data, function(e, data){
                    let thisBtn = $('.blog-list-like[data-id='+ data.blog_id +']');
                    thisBtn.children('i').toggleClass("bx-like bxs-like");
                    if (thisBtn.hasClass('liked')) {
                        //
                    } else {
                        thisBtn.addClass('liked');
                    }
                });
            }, 
            error:function() {
                // 
            }, 
            failed:function() {
                // 
            }
        });
    }
}

function getBlogLikeCount() {
    if (_uid != "0") {
        $("[data-toggle=blog-like-count").each(function(){
            let thisBtn = $(this);
            $.ajax({
                type:'GET',
                url: "/data/bloglike/count",
                data: {
                    blog_id: thisBtn.data("id"),
                    type: thisBtn.data('type')
                },
                success:function(response) {
                    // 
                    if (response.status === true) {
                        thisBtn.find('b').html(response.data.count);
                    }
                }, 
                error:function() {
                    // 
                }, 
                failed:function() {
                    // 
                }
            });
        });
    }
}

function postBlogLikeCount() {
    $(document).on("click", "[data-toggle=blog-like-count]", function(){
        let thisBtn = $(this);
        if (_uid == "0") {
            $('#loginModal').modal('show');
        } else {
            thisBtn.attr('disabled', 'disabled');
            $.ajax({
                type:'POST',
                url: "/data/bloglike/count",
                data: {
                    blog_id: thisBtn.data('id'),
                    type: thisBtn.data('type')
                },
                success:function(response) {
                    // 
                    if (response.status === true) {
                        thisBtn.find('b').html(response.data.count);
                        if (thisBtn.hasClass('liked')) {
                            thisBtn.removeClass('liked');
                        } else {
                            thisBtn.addClass('liked');
                        }
                    }
                    thisBtn.removeAttr("disabled");
                }, 
                error:function() {
                    // 
                    thisBtn.removeAttr("disabled");
                }, 
                failed:function() {
                    // 
                    thisBtn.removeAttr("disabled");
                }
            });
        }
    });
}