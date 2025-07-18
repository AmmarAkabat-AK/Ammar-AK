document.addEventListener('DOMContentLoaded', function() {
    loadTickerText();
});

function loadTickerText() {
    fetch('http://news.zerolagvpn.com:3000/ticker')
        .then(response => response.json())
        .then(data => {
            const tickerMove = document.querySelector('.ticker-move');
            tickerMove.innerHTML = '';  // مسح المحتوى الحالي

            data.forEach((item, index) => {
                const tickerItem = document.createElement('div');
                tickerItem.className = 'ticker-item';
                tickerItem.innerHTML = `
                    <span class="ticker-text">${item.text}</span>
                    ${item.icon ? `<img src="http://news.zerolagvpn.com:3000/uploads/${item.icon}" alt="icon" class="ticker-icon">` : ''}
                    ${index < data.length - 1 ? `<img src="http://news.zerolagvpn.com:3000/uploads/${item.separator_icon}" alt="separator" class="ticker-separator">` : ''}
                `;
                tickerMove.appendChild(tickerItem);
            });

            startTickerAnimation();
        })
        .catch(error => {
            console.error('Error fetching ticker text:', error);
        });
}

function startTickerAnimation() {
    const tickerMove = document.querySelector('.ticker-move');
    const tickerWidth = tickerMove.scrollWidth;
    const viewportWidth = window.innerWidth;

    let startPos = viewportWidth;
    let endPos = -tickerWidth;

    function animate() {
        if (startPos <= endPos) {
            startPos = viewportWidth;
        } else {
            startPos -= 2; // تعديل سرعة الحركة هنا
        }
        tickerMove.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

// باقي الكود كما هو

// باقي الكود كما هو
document.addEventListener('DOMContentLoaded', function() {
    loadChannels();
});

function loadChannels() {
    var channelButtons = document.getElementById('channelButtons');
    var channels = [
        {
            name: 'القنوات الرياضيه',
            options: [
                { url: 'http://ktv.im:8080/live/12438464/Oman1234/429405.m3u8', type: 'hls', quality: 'Bein Sports 1' },
                { url: 'http://mypro-stb.com:8080/rima_samionio/o60foAjilE/381736.m3u8', type: 'flv', quality: 'Bein Sports 2' },
                { url: 'http://technomaster.pro/hls/channel3-stream.m3u8', type: 'hls', quality: 'Bein Sports 3' },
                { url: 'http://m.devtv.biz:80/play/live.php?mac=00:1A:79:1E:7F:94&stream=47433&extension=m3u8', type: 'hls', quality: 'Bein Sports 4' },
				{ url: 'http://technomaster.pro/hls/channel5-stream.m3u8', type: 'hls', quality: 'SSC 1' },
				{ url: ' http://technomaster.pro/hls/channel4/stream.m3u8 ', type: 'hls', quality: 'SSC 1 EXTRA' }
            ]
        },
        {
            name: 'القنوات اليمنية',
            options: [
                { url: 'https://live.cdnbridge.tv/Almasirah/Almasirah_all/Almasirah/Almasirah_240p/chunks.m3u8', type: 'hls', quality: 'قناة المسيره' },
                { url: 'https://starmenajo.com/hls/yemenshabab/index.m3u8', type: 'hls', quality: 'قناة يمن شباب' },
                { url: 'https://starmenajo.com/hls/almahriah/index.m3u8', type: 'hls', quality: 'قناه المهرية' },
             /*    { url: 'https://games2.elahmad.com/tv719_www.elahmad.com_alsaeedah/tracks-v1a1/mono.m3u8', type: 'hls', quality: 'ايفون' } */
            ]
        },
        {
            name: 'القنوات الاخبارية',
            options: [
                { url: 'https://live-hls-web-aja.getaj.net/AJA/06.m3u8', type: 'hls', quality: 'قناة الجزيره' },
                { url: 'https://shls-hadath-prod-dub.shahid.net/out/v1/0e1a306399c346faac4226aa0858f99b/index.m3u8', type: 'hls', quality: 'قناة الحدث' },
                { url: 'https://live.cdnbridge.tv/Almasirah/Almasirah_all/playlist.m3u8', type: 'hls', quality: 'قناة المسيرة' },
               /*  { url: 'https://d3o3cim6uzorb4.cloudfront.net/out/v1/0965e4d7deae49179172426cbfb3bc5e/index_2.m3u8', type: 'hls', quality: 'ايفون' } */
            ]
        },
        {
            name: 'قنوات ام بي سي',
            options: [
                { url: 'https://shls-masr-prod-dub.shahid.net/out/v1/d5036cabf11e45bf9d0db410ca135c18/index.m3u8', type: 'hls', quality: 'ام بي سي مصر' },
                { url: 'https://d3o3cim6uzorb4.cloudfront.net/out/v1/0965e4d7deae49179172426cbfb3bc5e/index.m3u8', type: 'hls', quality: 'ام بي سي' },
                { url: 'https://mbc1-enc.edgenextcdn.net/out/v1/b0b3a0e6750d4408bb86d703d5feffd1/index.m3u8', type: 'hls', quality: 'ام بي سي دراما' }
            ]
        },
      /*   {
            name: 'القناة 5',
            options: [
                { url: 'http://ch4.zerolagvpn.com/ch5_qu_240p.flv', type: 'flv', quality: 'جودة منخفضة' },
                { url: 'https://ch4.zerolagvpn.com/ch5_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch5_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch5_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        },
        {
            name: 'القناة 6',
            options: [
                { url: 'https://ch4.zerolagvpn.com/ch6_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch6_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch5_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        }  */  
        // إضافة المزيد من القنوات مع خياراتها هنا
    ];

    channelButtons.innerHTML = '';
    channels.forEach((channel, index) => {
        var button = document.createElement('button');
        button.className = 'channel-button';
        button.innerText = channel.name;
        
        button.addEventListener('click', function() {
            highlightButton(button, 'channel');
            showQualityOptions(channel.options);
        });
        
        channelButtons.appendChild(button);
    });

    var allMatchesElement = document.querySelector('.allmatches');
    allMatchesElement.setAttribute('data-channels', JSON.stringify(channels));
}

function showQualityOptions(options) {
    var qualityOptionsDiv = document.getElementById('qualityOptions');
    qualityOptionsDiv.innerHTML = '';

    options.forEach(option => {
        var optionButton = document.createElement('button');
        optionButton.className = 'channel-button2';
        optionButton.innerText = option.quality;
        optionButton.addEventListener('click', function() {
            highlightButton(optionButton, 'quality');
            playVideo(option.url, option.type);
            showInternetSpeedNote(option.quality); // عرض الملاحظة
        });
        
        qualityOptionsDiv.appendChild(optionButton);
    });

    qualityOptionsDiv.style.display = 'block'; // عرض الخيارات
}
function showInternetSpeedNote(quality) {
    var note = '';
    
    switch (quality) {
            case 'جودة منخفضة':
            note = 'هذه الجودة تتطلب سرعة إنترنت لا تقل عن300 كيلوبت في الثانية لضمان تشغيل سلس للفيديو.';
            break;
        case 'جودة متوسطه':
            note = 'هذه الجودة تتطلب سرعة إنترنت لا تقل عن 1 ميجابت في الثانية لضمان تشغيل سلس للفيديو.';
            break;
        case 'جودة عالية':
            note = 'هذه الجودة تتطلب سرعة إنترنت لا تقل عن 1.5 ميجابت في الثانية لضمان تشغيل سلس للفيديو.';
            break;
        case 'ايفون':
            note = 'هذا المشغل مخصص لأجهزة الايفون.';
            break;
    }

    var noteElement = document.getElementById('note');
    noteElement.innerText = note;
    noteElement.style.display = 'block';
}

function highlightButton(button, type) {
    if (type === 'channel') {
        // إعادة تعيين جميع أزرار القنوات
        var channelButtons = document.querySelectorAll('.channel-button');
        channelButtons.forEach(btn => btn.classList.remove('active-channel-button'));
        
        // تعيين الزر الحالي كـ active
        button.classList.add('active-channel-button');
    } else if (type === 'quality') {
        // إعادة تعيين جميع أزرار الجودة
        var qualityButtons = document.querySelectorAll('.channel-button2');
        qualityButtons.forEach(btn => btn.classList.remove('active-quality-option-button'));
        
        // تعيين الزر الحالي كـ active
        button.classList.add('active-quality-option-button');
    }
}

var currentType = '';
var player = null;

function stopCurrentPlayer() {
    if (player) {
        switch (currentType) {
            case 'mpegts':
            case 'flv':
                player.unload();
                player.detachMediaElement();
                player.destroy();
                break;
            case 'hls':
                player.destroy();
                break;
            case 'dash':
                player.reset();
                break;
        }
        player = null;
        currentType = '';
    }
}

function playVideo(url, type) {
    var videoElement = document.getElementById('videoElement');

    stopCurrentPlayer();

    const encoderConfigs = {
        'mpegts': {
            checkSupport: () => mpegts.getFeatureList().mseLivePlayback,
            createPlayer: () => mpegts.createPlayer({
                type: 'mpegts',
                url: url,
                config: {
                    autoCleanupMaxBackwardDuration: 3 * 60,
                    enableWorker: true
                }
            }),
            error: 'المتصفح لا يدعم التشغيل المباشر لـ MSE.'
        },
        'flv': {
            checkSupport: () => flvjs.isSupported(),
            createPlayer: () => {
                const flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: url,
                    config: {
                        enableStashBuffer: false,
                        isLive: true
                    }
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
                return flvPlayer;
            },
            error: 'المتصفح لا يدعم FLV أو هناك مشكلة في التشغيل.'
        },
        'hls': {
            checkSupport: () => Hls.isSupported(),
            createPlayer: () => {
                const hlsPlayer = new Hls({
                    maxBufferLength: 5,
                    maxMaxBufferLength: 15,
                    startLevel: 1,
                    liveSyncDuration: 2
                });
                hlsPlayer.loadSource(url);
                hlsPlayer.attachMedia(videoElement);
                hlsPlayer.on(Hls.Events.MANIFEST_PARSED, function () {
                    videoElement.play();
                });
                return hlsPlayer;
            }
        },
        'dash': {
            checkSupport: () => dashjs.MediaPlayer.isSupported(),
            createPlayer: () => {
                const dashPlayer = dashjs.MediaPlayer().create();
                dashPlayer.updateSettings({
                    streaming: {
                        stableBufferTime: 0,
                        bufferTimeAtTopQuality: 0,
                        bufferTimeAtTopQualityLongForm: 0
                    }
                });
                dashPlayer.initialize(videoElement, url, true);
                return dashPlayer;
            }
        },
        'html5': {
            checkSupport: () => true,
            createPlayer: () => {
                videoElement.src = url;
                videoElement.play();
                return videoElement;
            }
        }
    };

    const config = encoderConfigs[type];
    if (config && config.checkSupport()) {
        player = config.createPlayer();
        currentType = type;
    } else {
        console.error(config.error || `نوع الإنكودر ${type} غير مدعوم.`);
    }
}
