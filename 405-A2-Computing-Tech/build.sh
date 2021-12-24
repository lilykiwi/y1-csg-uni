rm out.html
echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">' >> out.html
echo '<link rel="stylesheet" href="custom.css">' >> out.html
echo '<div class="container">' >> out.html
pandoc notes.md >> out.html
echo '</div>' >> out.html
