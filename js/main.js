// JavaScript部分のコメントはC言語と同様

        var PIN = 8;
        var arduino = null;
        var D_Port = "COM5";

        function Servo() {
            $("#servo").click(function() {
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
                var ontime = 2600;
                var offtime = 20000 - ontime;
                arduino.pulse(PIN, ontime, offtime);
            });
        }


        function setup() {
            if(document.arduino) {
                arduino = document.arduino;
                try{
                    arduino.open(D_Port);
                    arduino.pinMode(0,true);
                    Servo();
                } catch(e) {
                    alert("Connection failed");
                }
            }
        }

$(function () {
    setup();
});

function changeDevicePort(){
    D_Port = $('#devPort').val();
    setup();
}
