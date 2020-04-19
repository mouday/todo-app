export function getSetting() {
    console.log('getSetting')
    const data = uni.getStorageSync('setting_key');
    let detail = null;

    try {
        detail = JSON.parse(data)
    } catch (e) {
        detail = {
            water: 0,
            run: 0,
            skipping: 0,
            sit_up: 0,
        }
    }
    return detail
}

export function setSetting(detail) {
    console.log('setSetting')
    uni.setStorageSync('setting_key', JSON.stringify({
        water: detail.water,
        run: detail.run,
        skipping: detail.skipping,
        sit_up: detail.sit_up,
    }));
}
