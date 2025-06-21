// Yandex Games SDK Integration
class YandexGamesSDK {
    constructor() {
        this.isInitialized = false;
        this.ysdk = null;
        this.player = null;
        this.leaderboard = null;
        this.adv = null;
        this.isYandexGames = false;

        // Check if running on Yandex Games platform
        this.checkYandexEnvironment();
    }

    checkYandexEnvironment() {
        // Check if we're running on Yandex Games
        this.isYandexGames = window.location.hostname.includes('yandex') ||
            window.YaGames !== undefined ||
            window.parent !== window; // iframe detection
    }

    async init() {
        if (!this.isYandexGames) {
            console.log('Not running on Yandex Games platform, SDK disabled');
            return false;
        }

        try {
            // Load Yandex Games SDK
            if (!window.YaGames) {
                await this.loadSDK();
            }

            this.ysdk = await window.YaGames.init();
            this.isInitialized = true;

            console.log('Yandex Games SDK initialized successfully');

            // Initialize player
            await this.initPlayer();

            // Initialize advertising
            this.initAdvertising();

            // Initialize leaderboard
            this.initLeaderboard();

            return true;
        } catch (error) {
            console.error('Failed to initialize Yandex Games SDK:', error);
            return false;
        }
    }

    async loadSDK() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://yandex.ru/games/sdk/v2';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async initPlayer() {
        if (!this.ysdk) return;

        try {
            this.player = await this.ysdk.getPlayer();
            console.log('Player initialized:', this.player);
        } catch (error) {
            console.error('Failed to initialize player:', error);
        }
    }

    initAdvertising() {
        if (!this.ysdk) return;

        try {
            this.adv = this.ysdk.adv;
            console.log('Advertising initialized');
        } catch (error) {
            console.error('Failed to initialize advertising:', error);
        }
    }

    initLeaderboard() {
        if (!this.ysdk) return;

        try {
            this.leaderboard = this.ysdk.getLeaderboards();
            console.log('Leaderboard initialized');
        } catch (error) {
            console.error('Failed to initialize leaderboard:', error);
        }
    }

    // Show fullscreen ad
    async showFullscreenAd() {
        if (!this.adv) return false;

        return new Promise((resolve) => {
            this.adv.showFullscreenAdv({
                callbacks: {
                    onOpen: () => {
                        console.log('Fullscreen ad opened');
                        // Pause game
                        if (window.game) {
                            window.game.pauseGame();
                        }
                    },
                    onClose: (wasShown) => {
                        console.log('Fullscreen ad closed, was shown:', wasShown);
                        // Resume game
                        if (window.game) {
                            window.game.resumeGame();
                        }
                        resolve(wasShown);
                    },
                    onError: (error) => {
                        console.error('Fullscreen ad error:', error);
                        resolve(false);
                    }
                }
            });
        });
    }

    // Show rewarded ad
    async showRewardedAd() {
        if (!this.adv) return false;

        return new Promise((resolve) => {
            this.adv.showRewardedVideo({
                callbacks: {
                    onOpen: () => {
                        console.log('Rewarded ad opened');
                        // Pause game
                        if (window.game) {
                            window.game.pauseGame();
                        }
                    },
                    onRewarded: () => {
                        console.log('Rewarded ad completed - giving reward');
                        resolve(true);
                    },
                    onClose: () => {
                        console.log('Rewarded ad closed');
                        // Resume game
                        if (window.game) {
                            window.game.resumeGame();
                        }
                    },
                    onError: (error) => {
                        console.error('Rewarded ad error:', error);
                        resolve(false);
                    }
                }
            });
        });
    }

    // Save player data
    async saveData(data) {
        if (!this.player) return false;

        try {
            await this.player.setData(data);
            console.log('Data saved successfully');
            return true;
        } catch (error) {
            console.error('Failed to save data:', error);
            return false;
        }
    }

    // Load player data
    async loadData() {
        if (!this.player) return null;

        try {
            const data = await this.player.getData();
            console.log('Data loaded successfully:', data);
            return data;
        } catch (error) {
            console.error('Failed to load data:', error);
            return null;
        }
    }

    // Set leaderboard score
    async setLeaderboardScore(leaderboardName, score) {
        if (!this.leaderboard) return false;

        try {
            await this.leaderboard.setLeaderboardScore(leaderboardName, score);
            console.log(`Score ${score} set for leaderboard ${leaderboardName}`);
            return true;
        } catch (error) {
            console.error('Failed to set leaderboard score:', error);
            return false;
        }
    }

    // Get leaderboard entries
    async getLeaderboardEntries(leaderboardName, options = {}) {
        if (!this.leaderboard) return null;

        try {
            const entries = await this.leaderboard.getLeaderboardEntries(leaderboardName, options);
            console.log('Leaderboard entries:', entries);
            return entries;
        } catch (error) {
            console.error('Failed to get leaderboard entries:', error);
            return null;
        }
    }

    // Get player info
    getPlayerInfo() {
        if (!this.player) return null;

        return {
            isAuthorized: this.player.getMode() !== 'lite',
            name: this.player.getName(),
            photo: this.player.getPhoto('medium'),
            uniqueID: this.player.getUniqueID()
        };
    }

    // Request player authorization
    async requestAuth() {
        if (!this.ysdk) return false;

        try {
            this.player = await this.ysdk.auth.openAuthDialog();
            console.log('Player authorized:', this.player);
            return true;
        } catch (error) {
            console.error('Authorization failed:', error);
            return false;
        }
    }

    // Game ready signal
    gameReady() {
        if (!this.ysdk) return;

        try {
            this.ysdk.features.LoadingAPI?.ready();
            console.log('Game ready signal sent');
        } catch (error) {
            console.error('Failed to send game ready signal:', error);
        }
    }

    // Game start signal
    gameStart() {
        if (!this.ysdk) return;

        try {
            this.ysdk.features.GameplayAPI?.start();
            console.log('Game start signal sent');
        } catch (error) {
            console.error('Failed to send game start signal:', error);
        }
    }

    // Game stop signal
    gameStop() {
        if (!this.ysdk) return;

        try {
            this.ysdk.features.GameplayAPI?.stop();
            console.log('Game stop signal sent');
        } catch (error) {
            console.error('Failed to send game stop signal:', error);
        }
    }
}

// Create global Yandex Games SDK instance
window.yandexGamesSDK = new YandexGamesSDK(); 