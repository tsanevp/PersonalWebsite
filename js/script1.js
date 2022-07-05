$('#AboutMe').click(function() {
    window.location='AboutMe.html';
});

$('#Projects').click(function() {
    window.location='Projects.html';
});

$('#Resume').click(function() {
    window.location='https://drive.google.com/file/d/1E_ClEYxCbqXSlmUSKDwRmD3upcLa59T8/view?usp=sharing';
});

$('#ContactMe').click(function() {
    // window.location='ContactMe.html';
    email()
});

$('#homeImg').click(function() {
    window.location='index.html';
});

function email() {
    window.open('mailto: petertsanev7@gmail.com');
}