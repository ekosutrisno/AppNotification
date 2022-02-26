import PushNotification from "react-native-push-notification";

class notification {
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("TOKEN", token);
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION", notification);
            },
            onAction: function (notification) {
                console.log("ACTION", notification);
                console.log("NOTIFICATION", notification);
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    }
}

export const notif = new notification();