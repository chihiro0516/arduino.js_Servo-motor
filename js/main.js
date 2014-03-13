// JavaScript部分のコメントはC言語と同様

        var PIN = 8;
        var arduino = null;

        $(document).ready(function() {
            arduino = document.arduino;
            arduino.open("COM4");
            arduino.pinMode(PIN, true);
            $("#servo").click(function() {
                //var value = Math.floor(Math.random()*2000);
                //pulse
                var ontime = 2000;
                var offtime = 20000 - ontime;
                arduino.pulse(PIN, ontime, offtime);
            });
            $("#servo2").click(function() {
                //pulse
                var ontime = 10000;
                var offtime = 20000 - ontime;
                arduino.pulse(PIN, ontime, offtime);
            });
            $("#servo3").click(function() {
                //pulse
                var ontime = 2300;
                var offtime = 20000 - ontime;
                arduino.pulse(PIN, ontime, offtime);
            });
        });