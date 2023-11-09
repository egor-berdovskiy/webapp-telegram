const tg = window.Telegram.WebApp;


export function useTelegram() {
    const onClose = () => {
        tg.close();
    }

    const onToggleBackButton = () => {
        if (tg.BackButton.isVisible) {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }

    const onToggleMainButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleBackButton,
        onToggleMainButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}
