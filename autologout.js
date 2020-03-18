<script>
//auto logout
  $(function() {

    function timeChecker() {
      setInterval(function() {
        var storedTimeStamp = sessionStorage.getItem("lastTimeStamp");
        timeCompare(storedTimeStamp);
      }, 60000); //interval check time every 1 minutes
    }

    function timeCompare(timeString) {
      var currentTime = new Date();
      var pastTime = new Date(timeString);
      var timeDiff = currentTime - pastTime;
      var minPast = Math.floor(timeDiff / 600000); //10 minutes auto logout duration

      if (minPast >= 1) {
        sessionStorage.removeItem("lastTimeStamp");
        window.location.assign("<?= base_url(); ?>index.php/auth/logout"); //url logout
        return false;
      } else {
        console.log(currentTime + " - " + pastTime + " = " + timeDiff); //print to console log time duration running
      }
    }

    $(document).mousemove(function() {
      var TimeStamp = new Date();
      sessionStorage.setItem("lastTimeStamp", TimeStamp); //save timestamp variable last mouse draged
    });

    timeChecker();
  });
</script>
