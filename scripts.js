function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; // Reset to the beginning
    sound.play();
}

function showDetails(threatType) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const message = document.getElementById('popup-message');
    const solutionsList = document.getElementById('solutions-list');
    solutionsList.innerHTML = '';

    // Play the click sound effect
    playSound('soundClick');

    // Play specific sound for each threat
    switch (threatType) {
        case 'ransomware':
            playSound('soundRansomware');
            title.textContent = 'فيروس رانسوم وير';
            message.textContent = 'هذا الفيروس يقوم بتشفير ملفاتك ويطلب فدية لتحريرها. تأكد من عدم فتح أي روابط غير موثوقة!';
            solutionsList.innerHTML = `
                <li>استخدم برنامج مضاد للفيروسات مثل <strong><a href="https://www.avast.com/" target="_blank">Avast</a></strong> أو <strong><a href="https://www.malwarebytes.com/" target="_blank">Malwarebytes</a></strong> لإجراء فحص شامل لجهازك.</li>
                <li>استرجع ملفاتك من النسخ الاحتياطية إذا كنت قد قمت بإنشاء نسخ احتياطية مسبقًا.</li>
                <li>يمكنك زيارة موقع <strong><a href="https://nomoreransom.org/" target="_blank">No More Ransom</a></strong> للحصول على المساعدة.</li>
            `;
            break;
        case 'phishing':
            playSound('soundPhishing');
            title.textContent = 'التصيد الاحتيالي';
            message.textContent = 'الهاكرز يستخدمون تقنيات معقدة لخداعك وإقناعك بتسليم معلوماتك الشخصية. كن حذرًا!';
            solutionsList.innerHTML = `
                <li>تأكد من استخدام برنامج مضاد للفيروسات وتمكين الحماية من التصيد الاحتيالي.</li>
                <li>تحقق من الروابط قبل النقر عليها. يمكنك استخدام <strong><a href="https://www.virustotal.com/" target="_blank">VirusTotal</a></strong> لفحص الروابط.</li>
                <li>تجنب مشاركة معلوماتك الشخصية عبر البريد الإلكتروني أو الرسائل غير الموثوقة.</li>
            `;
            break;
        case 'dataLeak':
            playSound('soundDataLeak');
            title.textContent = 'تسريب البيانات';
            message.textContent = 'تسريب البيانات يمكن أن يحدث من خلال هجمات على الشبكات أو سرقة البيانات. تأكد من حماية معلوماتك الشخصية!';
            solutionsList.innerHTML = `
                <li>تفعيل المصادقة الثنائية على جميع حساباتك.</li>
                <li>قم بتغيير كلمات المرور بانتظام وتجنب استخدام كلمات مرور سهلة التخمين.</li>
                <li>استخدم خدمات مراقبة البيانات مثل <strong><a href="https://haveibeenpwned.com/" target="_blank">Have I Been Pwned</a></strong> للتحقق من تسريبات البيانات.</li>
            `;
            break;
        case 'ddos':
            playSound('soundDdos');
            title.textContent = 'الهجمات DDoS';
            message.textContent = 'تستخدم الهجمات DDoS لإغراق الخوادم بحركة مرور غير مشروعة. كن مستعدًا!';
            solutionsList.innerHTML = `
                <li>استخدم خدمات حماية DDoS مثل <strong><a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a></strong> لحماية موقعك.</li>
                <li>تأكد من أن لديك خطة استجابة للهجمات.</li>
            `;
            break;
        case 'networkHacking':
            playSound('soundNetworkHacking');
            title.textContent = 'اختراق الشبكات';
            message.textContent = 'اختراق الشبكات يمكن أن يؤدي إلى تسريب المعلومات الشخصية. تأكد من حماية شبكتك!';
            solutionsList.innerHTML = `
                <li>استخدم كلمات مرور قوية لشبكتك اللاسلكية.</li>
                <li>قم بتعطيل WPS على جهاز التوجيه الخاص بك.</li>
                <li>قم بتحديث برامج جهاز التوجيه بانتظام لتصحيح الثغرات.</li>
            `;
            break;
        case 'malware':
            playSound('soundMalware');
            title.textContent = 'البرمجيات الخبيثة';
            message.textContent = 'البرمجيات الخبيثة يمكن أن تلحق الضرر بجهازك وتسرق معلوماتك. كن حذرًا عند تحميل الملفات!';
            solutionsList.innerHTML = `
                <li>تجنب تحميل الملفات من مصادر غير موثوقة.</li>
                <li>استخدم برنامج مكافحة الفيروسات لإجراء فحص شامل للجهاز.</li>
            `;
            break;
        case 'identityTheft':
            playSound('soundIdentityTheft');
            title.textContent = 'سرقة الهوية';
            message.textContent = 'تتم سرقة الهوية عندما يستخدم شخص ما معلوماتك الشخصية دون إذن. احمِ معلوماتك!';
            solutionsList.innerHTML = `
                <li>تأكد من مراقبة تقارير الائتمان الخاصة بك بانتظام.</li>
                <li>استخدم خدمات مراقبة الهوية لتحذيرك في حالة سرقة هويتك.</li>
            `;
            break;
        case 'internetFraud':
            playSound('soundInternetFraud');
            title.textContent = 'الاحتيال على الإنترنت';
            message.textContent = 'الاحتيال على الإنترنت يمكن أن يؤدي إلى خسارة الأموال. كن حذرًا عند التعامل مع المعاملات المالية!';
            solutionsList.innerHTML = `
                <li>تحقق من المصداقية قبل إجراء أي معاملات عبر الإنترنت.</li>
                <li>استخدم طرق الدفع الآمنة مثل PayPal.</li>
            `;
            break;
        case 'spyware':
            playSound('soundSpyware');
            title.textContent = 'برمجيات التجسس';
            message.textContent = 'تقوم برمجيات التجسس بجمع معلومات عنك دون علمك. تأكد من حماية جهازك!';
            solutionsList.innerHTML = `
                <li>استخدم برامج مكافحة الفيروسات للكشف عن برمجيات التجسس.</li>
                <li>تجنب تثبيت البرامج من مصادر غير موثوقة.</li>
            `;
            break;
        case 'adware':
            playSound('soundAdware');
            title.textContent = 'برمجيات الإعلانات';
            message.textContent = 'برمجيات الإعلانات قد تزعجك بالإعلانات المزعجة. استخدم أدوات لمنع الإعلانات!';
            solutionsList.innerHTML = `
                <li>تثبيت إضافات حظر الإعلانات على متصفحك.</li>
                <li>استخدم برامج تنظيف الجهاز لإزالة البرمجيات غير المرغوب فيها.</li>
            `;
            break;
        case 'rootkit':
            playSound('soundRootkit');
            title.textContent = 'روت كيت';
            message.textContent = 'تساعد روت كيت المخترقين في الحصول على السيطرة على جهازك. كن حذرًا!';
            solutionsList.innerHTML = `
                <li>استخدم برامج مكافحة الفيروسات لإزالة الروت كيت.</li>
                <li>قم بإعادة تثبيت نظام التشغيل في حالة الشك بوجود روت كيت.</li>
            `;
            break;
        case 'keylogger':
            playSound('soundKeylogger');
            title.textContent = 'مسجل ضربات المفاتيح';
            message.textContent = 'يستخدم مسجل ضربات المفاتيح لجمع معلومات تسجيل الدخول الخاصة بك. احمِ جهازك!';
            solutionsList.innerHTML = `
                <li>استخدم برامج مكافحة الفيروسات لإزالة مسجل ضربات المفاتيح.</li>
                <li>قم بتغيير كلمات المرور بانتظام.</li>
            `;
            break;
        case 'scareware':
            playSound('soundScareware');
            title.textContent = 'سكاروير';
            message.textContent = 'يحاول سكاروير خداعك لشراء برامج مزيفة. كن حذرًا!';
            solutionsList.innerHTML = `
                <li>تجنب النقر على الإعلانات المريبة.</li>
                <li>استخدم برامج مكافحة الفيروسات للتحقق من وجود سكاروير.</li>
            `;
            break;
        case 'zeroDay':
            playSound('soundZeroDay');
            title.textContent = 'ثغرة يوم الصفر';
            message.textContent = 'تعتبر ثغرات يوم الصفر من أخطر الثغرات. تأكد من تحديث برامجك!';
            solutionsList.innerHTML = `
                <li>قم بتحديث البرامج لديك بانتظام لسد الثغرات الأمنية.</li>
                <li>استخدم جدران الحماية لحماية نظامك من الهجمات.</li>
            `;
            break;
        case 'worm':
            playSound('soundWorm');
            title.textContent = 'دودة الكمبيوتر';
            message.textContent = 'يمكن للدودة الانتشار عبر الشبكة وإلحاق الضرر بالأجهزة. احمِ جهازك!';
            solutionsList.innerHTML = `
                <li>استخدم برامج مكافحة الفيروسات لاكتشاف الديدان.</li>
                <li>قم بتحديث نظام التشغيل لديك بانتظام.</li>
            `;
            break;
        case 'trojan':
            playSound('soundTrojan');
            title.textContent = 'حصان طروادة';
            message.textContent = 'يحاول حصان طروادة خداعك لتثبيت برمجيات خبيثة. احترس!';
            solutionsList.innerHTML = `
                <li>تجنب تثبيت البرمجيات من مصادر غير موثوقة.</li>
                <li>استخدم برامج مكافحة الفيروسات لإزالة حصان طروادة.</li>
            `;
            break;
        case 'driveByDownload':
            playSound('soundDriveByDownload');
            title.textContent = 'تحميل عشوائي';
            message.textContent = 'قد يحدث تحميل عشوائي عندما تزور مواقع ضارة. كن حذرًا!';
            solutionsList.innerHTML = `
                <li>استخدم حجب الإعلانات لحماية نفسك من التحميل العشوائي.</li>
                <li>تأكد من تحديث متصفحك وإضافاته بانتظام.</li>
            `;
            break;
        case 'remoteAccessTrojan':
            playSound('soundRemoteAccessTrojan');
            title.textContent = 'حصان طروادة للوصول عن بُعد';
            message.textContent = 'يستخدم هذا النوع من البرمجيات لإعطاء المتسللين الوصول لجهازك. احمِ نفسك!';
            solutionsList.innerHTML = `
                <li>استخدم برامج مكافحة الفيروسات لاكتشاف البرمجيات الضارة.</li>
                <li>تجنب فتح المرفقات غير المعروفة.</li>
            `;
            break;
        case 'socialEngineering':
            playSound('soundSocialEngineering');
            title.textContent = 'الهندسة الاجتماعية';
            message.textContent = 'يستخدم المهاجمون الهندسة الاجتماعية للتلاعب بك. كن واعيًا!';
            solutionsList.innerHTML = `
                <li>كن حذرًا عند مشاركة معلوماتك الشخصية.</li>
                <li>تأكد من صحة المعلومات قبل اتخاذ أي إجراء.</li>
            `;
            break;
        case 'credentialStuffing':
            playSound('soundCredentialStuffing');
            title.textContent = 'حشو بيانات الاعتماد';
            message.textContent = 'تحدث هذه العملية عندما يستخدم المتسللون بيانات اعتماد مسروقة للوصول إلى حساباتك. احمِ نفسك!';
            solutionsList.innerHTML = `
                <li>تجنب استخدام نفس كلمة المرور عبر حسابات متعددة.</li>
                <li>تأكد من تمكين المصادقة الثنائية.</li>
            `;
            break;
    }

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
