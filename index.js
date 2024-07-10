   
 $(document).ready(function(){
    // Generate a random number between 1000 and 9999
    var randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Append the number to the div
    $('#numberDiv').text(randomNumber);
});
   
   
   
   
   $(document).ready(function(){
            var commands = [
                {type: 'cmd', text: '$ npm install <del>CatDev</del>CatDev'},
                {type: 'output', text: '+CatDev@0.10.2 installed'},
                {type: 'cmd', text: '$ cd CatDev'},
                {type: 'cmd', text: '$ npm run Gas Pump'},
                {type: 'output', text: '\nPrelaunch is OVER\n----------------------------------------------\nPrelaunch: Stats # ./CatDev/prelaunch.stats\n\n  Scenario: Stupid cat lands on the moon\n     0% our dev draw\n    10% stupid cat meme ever\n    25% but we love him\n    50% next moonshot\n   100% meme worthy\n\n ---------- -------------- --------- --------- -----\n  MARKET CAP   TOTAL SUPPLY   TAX BUY   TAX SELL   LP\n ---------- -------------- --------- --------- -----\n  10B         1M            0%       0%        BURN'},
                {type: 'cmd', text: '$ npm run buy'},
                {type: 'output', text: 'Buy completed'},
                {type: 'cmd', text: '$ npm run launch'},
                {type: 'output', text: 'CEX listing confirmed. DEX trading is LIVE.'},
                {type: 'cmd', text: '$'}
            ];

            function displayCommands(index) {
                if (index >= commands.length) return;

                var command = commands[index];
                if (command.type === 'cmd') {
                    // Remove previous caret
                    $('.t-caret').hide();
                    
                    $('#terminal').append('<kbd class="cmd cmd' + index + '"></kbd>');
                    $('.cmd' + index).t(command.text, {
                        speed: 50,
                        caret: true,
                        blink: true,
                        mistype: 5,
                        repeat: 0,
                        pause_on_click: false,
                        pause_on_tab_switch: false,
                        fin: function() {
                            $('#terminal').append('<br>');
                            displayCommands(index + 1);
                        }
                    });
                } else {
                    setTimeout(function() {
                        $('#terminal').append('<span class="output">' + command.text.replace(/\n/g, '<br>') + '</span><br><br>');
                        displayCommands(index + 1);
                    }, 200); // Slight delay for output appearance
                }
            }

            displayCommands(0);
        });