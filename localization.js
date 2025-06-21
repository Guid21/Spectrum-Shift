// Localization system for Color2048 Game
class Localization {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            'en': {
                // Game UI
                'score': 'SCORE',
                'best': 'BEST',
                'gameOver': 'Game Over!',
                'tryAgain': 'Try Again',
                'newGame': '🎮 New Game',
                'menu': 'Menu',
                'shop': 'Shop',
                'faq': '❓ FAQ',
                'discoveredColors': 'Discovered Colors',
                'leaderboard': '🏆 Leaderboard',
                'watchAdTitle': 'Free Gems',
                'watchAdDesc': 'Watch an ad to get 50 free gems',
                'watchAdButton': 'Watch Ad',
                'leaderboardTitle': '🏆 Top Players',
                'yourRank': 'Your rank',
                'loading': 'Loading...',
                'noData': 'No data available',
                'place': 'Place',
                'player': 'Player',
                'score': 'Score',
                'you': 'You',

                // Shop
                'extraUndo': 'Extra Undo',
                'extraUndoDesc': 'Increase max undo count by 1 (Very valuable!)',
                'rainbowBoost': 'Rainbow Boost',
                'rainbowBoostDesc': 'Increase rainbow tile chance by 3% (Luxury upgrade)',
                'gridUpgrade': 'Grid Upgrade',
                'gridUpgradeDesc': 'Upgrade grid from 4x4 to 5x5 (Game changer!)',
                'buy': 'Buy',

                // Abilities
                'blast': 'BLAST',
                'blastDesc': 'Destroy groups of same-colored tiles',
                'perUse': 'per use',
                'costIncreases': 'Cost increases with score',
                'undo': 'UNDO',

                // FAQ
                'gameGuideTitle': '❓ Game Guide & FAQ',
                'mainGameGoal': '🎯 Main Game Goal',
                'mainGameGoalDesc': 'Combine tiles of the same color to create new colors and score points. The goal is to reach the highest color levels and achieve the maximum score!',
                'colorSystem': '🎨 Color System (12 Levels)',
                'colorSystemDesc': `<strong>Color Levels:</strong><br>
                    1. Coral Red (2 points)<br>
                    2. Sunset Orange (4 points)<br>
                    3. Golden Yellow (8 points)<br>
                    4. Lime Green (16 points)<br>
                    5. Emerald (32 points)<br>
                    6. Turquoise (64 points)<br>
                    7. Sky Blue (128 points)<br>
                    8. Royal Blue (256 points)<br>
                    9. Deep Purple (512 points)<br>
                    10. Violet (1024 points)<br>
                    11. Rose Pink (2048 points)<br>
                    12. Sunset Gold (4096 points)`,
                'currencySystem': '💎 Currency System (Gems)',
                'currencySystemDesc': 'Gems are earned when merging tiles. The amount depends on the tile level. Use gems in the shop to purchase upgrades. <strong>Important:</strong> rewards decrease as score increases to create difficulty.',
                'rainbowTiles': '🌈 Rainbow Tiles',
                'rainbowTilesDesc': 'Rare tiles with an iridescent background. Can merge with any regular tile. Base spawn chance is 1% (can be increased in the shop). When merging two rainbow tiles, a rainbow tile of the highest level is created.',
                'blastAbility': '💥 "Blast" Ability',
                'blastAbilityDesc': `<strong>Unlock:</strong> When reaching the 6th color level.<br>
                    <strong>How it works:</strong> Destroys groups of adjacent tiles of the same color.<br>
                    <strong>Cost:</strong> 8💎 + increases with score.<br>
                    <strong>Cooldown:</strong> 8 seconds + increases with score.`,
                'undoAbility': '↶ "Undo" Ability',
                'undoAbilityDesc': 'Not available by default - must be purchased in the shop. Allows you to undo the last move. Number of uses is limited and resets when starting a new game.',
                'blockers': '✖️ Blockers (Obstacles)',
                'blockersDesc': 'Appear after 100 points with a 15% probability. Gray tiles with a red X that cannot be merged. Create additional challenge. Can only be destroyed with the Blast ability.',
                'shopUpgrades': '🛒 Shop and Upgrades',
                'shopUpgradesDesc': `<strong>Extra Undo:</strong> +1 undo (25💎 + increases with purchases)<br>
                    <strong>Rainbow Boost:</strong> +3% rainbow tile chance (40💎 + increases)<br>
                    <strong>Grid Upgrade:</strong> Upgrade grid from 4x4 to 5x5 (100💎, one-time)`,
                'controls': '🎮 Controls',
                'controlsDesc': `<strong>Desktop:</strong> Arrow keys<br>
                    <strong>Mobile:</strong> Swipe on screen<br>
                    <strong>Blast mode:</strong> Click on tile to blast<br>
                    All tiles move in the selected direction until they stop.`,
                'gameInfo': '📋 Game Information',
                'gameInfoDesc': `<strong>Difficulty:</strong> As score increases, ability costs rise, and gem rewards decrease.<br>
                    <strong>Best Score:</strong> Saved between sessions.`
            },
            'ru': {
                // Game UI
                'score': 'ОЧКИ',
                'best': 'ЛУЧШИЕ',
                'gameOver': 'Игра окончена!',
                'tryAgain': 'Попробовать снова',
                'newGame': '🎮 Новая игра',
                'menu': 'Меню',
                'shop': 'Магазин',
                'faq': '❓ Справка',
                'discoveredColors': 'Открытые цвета',
                'leaderboard': '🏆 Лидерборд',
                'watchAdTitle': 'Бесплатные кристаллы',
                'watchAdDesc': 'Посмотрите рекламу и получите 50 кристаллов',
                'watchAdButton': 'Смотреть рекламу',
                'leaderboardTitle': '🏆 Лучшие игроки',
                'yourRank': 'Ваше место',
                'loading': 'Загрузка...',
                'noData': 'Нет данных',
                'place': 'Место',
                'player': 'Игрок',
                'score': 'Счёт',
                'you': 'Вы',

                // Shop
                'extraUndo': 'Дополнительная отмена',
                'extraUndoDesc': 'Увеличить максимальное количество отмен на 1 (Очень ценно!)',
                'rainbowBoost': 'Радужный буст',
                'rainbowBoostDesc': 'Увеличить шанс радужной плитки на 3% (Премиум улучшение)',
                'gridUpgrade': 'Улучшение сетки',
                'gridUpgradeDesc': 'Увеличить сетку с 4x4 до 5x5 (Меняет игру!)',
                'buy': 'Купить',

                // Abilities
                'blast': 'ВЗРЫВ',
                'blastDesc': 'Уничтожить группы плиток одинакового цвета',
                'perUse': 'за использование',
                'costIncreases': 'Стоимость увеличивается с очками',
                'undo': 'ОТМЕНА',

                // FAQ
                'gameGuideTitle': '❓ Руководство игры и FAQ',
                'mainGameGoal': '🎯 Основная цель игры',
                'mainGameGoalDesc': 'Соединяйте плитки одинакового цвета, чтобы создавать новые цвета и набирать очки. Цель - достичь высших уровней цветов и максимального счёта!',
                'colorSystem': '🎨 Система цветов (12 уровней)',
                'colorSystemDesc': `<strong>Уровни цветов:</strong><br>
                    1. Коралловый красный (2 очка)<br>
                    2. Закатный оранжевый (4 очка)<br>
                    3. Золотисто-жёлтый (8 очков)<br>
                    4. Лаймовый зелёный (16 очков)<br>
                    5. Изумрудный (32 очка)<br>
                    6. Бирюзовый (64 очка)<br>
                    7. Небесно-голубой (128 очков)<br>
                    8. Королевский синий (256 очков)<br>
                    9. Тёмно-фиолетовый (512 очков)<br>
                    10. Фиолетовый (1024 очка)<br>
                    11. Розовый (2048 очков)<br>
                    12. Закатное золото (4096 очков)`,
                'currencySystem': '💎 Система валюты (Кристаллы)',
                'currencySystemDesc': 'Кристаллы зарабатываются при слиянии плиток. Количество зависит от уровня плитки. Используйте кристаллы в магазине для покупки улучшений. <strong>Важно:</strong> награды уменьшаются с ростом очков для создания сложности.',
                'rainbowTiles': '🌈 Радужные плитки',
                'rainbowTilesDesc': 'Редкие плитки с переливающимся фоном. Могут сливаться с любой обычной плиткой. Базовый шанс появления 1% (можно увеличить в магазине). При слиянии двух радужных плиток создаётся радужная плитка наивысшего уровня.',
                'blastAbility': '💥 Способность "Взрыв"',
                'blastAbilityDesc': `<strong>Разблокировка:</strong> При достижении 6-го уровня цвета.<br>
                    <strong>Как работает:</strong> Уничтожает группы соседних плиток одинакового цвета.<br>
                    <strong>Стоимость:</strong> 8💎 + увеличивается с очками.<br>
                    <strong>Перезарядка:</strong> 8 секунд + увеличивается с очками.`,
                'undoAbility': '↶ Способность "Отмена"',
                'undoAbilityDesc': 'Недоступна по умолчанию - должна быть куплена в магазине. Позволяет отменить последний ход. Количество использований ограничено и сбрасывается при начале новой игры.',
                'blockers': '✖️ Блокировщики (Препятствия)',
                'blockersDesc': 'Появляются после 100 очков с вероятностью 15%. Серые плитки с красным X, которые нельзя слить. Создают дополнительную сложность. Могут быть уничтожены только способностью Взрыв.',
                'shopUpgrades': '🛒 Магазин и улучшения',
                'shopUpgradesDesc': `<strong>Дополнительная отмена:</strong> +1 отмена (25💎 + увеличивается с покупками)<br>
                    <strong>Радужный буст:</strong> +3% шанс радужной плитки (40💎 + увеличивается)<br>
                    <strong>Улучшение сетки:</strong> Увеличить сетку с 4x4 до 5x5 (100💎, одноразово)`,
                'controls': '🎮 Управление',
                'controlsDesc': `<strong>Компьютер:</strong> Стрелки на клавиатуре<br>
                    <strong>Мобильный:</strong> Свайп по экрану<br>
                    <strong>Режим взрыва:</strong> Клик по плитке для взрыва<br>
                    Все плитки двигаются в выбранном направлении до остановки.`,
                'gameInfo': '📋 Информация об игре',
                'gameInfoDesc': `<strong>Сложность:</strong> С ростом очков стоимость способностей растёт, а награды кристаллами уменьшаются.<br>
                    <strong>Лучший счёт:</strong> Сохраняется между сеансами.`
            }
        };

        // Load language from localStorage or default to browser language
        const savedLanguage = localStorage.getItem('gameLanguage');
        const browserLanguage = navigator.language.split('-')[0];

        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else if (this.translations[browserLanguage]) {
            this.currentLanguage = browserLanguage;
        }
    }

    // Get translation for a key
    t(key) {
        return this.translations[this.currentLanguage][key] || this.translations['en'][key] || key;
    }

    // Set current language
    setLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
            localStorage.setItem('gameLanguage', language);
            this.updateUI();
        }
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get available languages
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }

    // Update all UI elements with current language
    updateUI() {
        // Update static text elements
        const textElements = {
            'score-label': this.t('score'),
            'best-label': this.t('best'),
            'game-over-message': this.t('gameOver'),
            'try-again': this.t('tryAgain'),
            'new-game': this.t('newGame'),
            'menu-title': this.t('menu'),
            'shop-title': this.t('shop'),
            'faq-button': this.t('faq'),
            'achievement-title': this.t('discoveredColors'),
            'faq-modal-title': this.t('gameGuideTitle')
        };

        // Update elements that exist
        Object.keys(textElements).forEach(id => {
            const element = document.getElementById(id) || document.querySelector(`.${id}`);
            if (element) {
                element.textContent = textElements[id];
            }
        });

        // Update FAQ content
        this.updateFAQContent();

        // Trigger game update if game instance exists
        if (window.game) {
            window.game.updateLocalization();
        }
    }

    // Update FAQ modal content
    updateFAQContent() {
        const faqItems = [
            { key: 'mainGameGoal', descKey: 'mainGameGoalDesc' },
            { key: 'colorSystem', descKey: 'colorSystemDesc' },
            { key: 'currencySystem', descKey: 'currencySystemDesc' },
            { key: 'rainbowTiles', descKey: 'rainbowTilesDesc' },
            { key: 'blastAbility', descKey: 'blastAbilityDesc' },
            { key: 'undoAbility', descKey: 'undoAbilityDesc' },
            { key: 'blockers', descKey: 'blockersDesc' },
            { key: 'shopUpgrades', descKey: 'shopUpgradesDesc' },
            { key: 'controls', descKey: 'controlsDesc' },
            { key: 'gameInfo', descKey: 'gameInfoDesc' }
        ];

        const faqContainer = document.getElementById('faq-container');
        if (faqContainer) {
            const faqElements = faqContainer.querySelectorAll('.faq-item');
            faqElements.forEach((item, index) => {
                if (faqItems[index]) {
                    const question = item.querySelector('.faq-question span:first-child');
                    const answer = item.querySelector('.faq-answer');
                    if (question) question.innerHTML = this.t(faqItems[index].key);
                    if (answer) answer.innerHTML = this.t(faqItems[index].descKey);
                }
            });
        }
    }
}

// Create global localization instance
window.localization = new Localization(); 