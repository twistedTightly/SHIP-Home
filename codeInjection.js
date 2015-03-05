<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="scripts/jquery-2.0.0.min.js"><\/script>')</script>
<script>
  console.log('remove search');
  var searchBox = $('#page-footer .search-block').detach();
  searchBox.appendTo('.horizontal-navigation-bar #main-navigation ul');
</script>