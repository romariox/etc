(function () {
    // Comment buttons
    let buttons = document.getElementsByClassName('_3KgrO85L1p9wQbgwG27q4y');

    // Time comment
    //let timeC = document.getElementsByClassName('_3yx4Dn0W3Yunucf5sVJeFU');

    // Time edit comment  _2ETuFsVzMBxiHia6HfJCTQ _18WUrfxbke5CjwIjhXu6C-
    //let timeEc = document.getElementsByClassName('_3KgrO85L1p9wQbgwG27q4y');

    // For username, comment time and comment edit time _1a_HxF03jCyxnx706hQmJR
    let usernameCtCe = document.getElementsByClassName('_1a_HxF03jCyxnx706hQmJR');

    // For comment level
    let level = document.getElementsByClassName('_1RIl585IYPW6cmNXwgRz0J');
    
    // For expand more comments
    
    let moreComments = document.getElementsByClassName('_23013peWUhznY89KuYPZKv');

    let list = [];

    //list = [...buttons,...timeC,...timeEc];
    list = [...buttons, ...usernameCtCe, ...level, ...moreComments];
    list.forEach(element => {
        element.setAttribute('aria-hidden', 'true')
    });

})();