import { Config } from "./config.d";

const config: Config = {
    application: {
        name: "QRBINGO"
    },
    bingo: {
        sheet: {
            width: 5,
            height: 5
        },
        slot: {
            variations: [
                {
                    value: "istj",
                    label: "IS\nTJ",
                    description: "The Inspector"
                },
                {
                    value: "infj",
                    label: "IN\nFJ",
                    description: "The Counselor"
                },
                {
                    value: "intj",
                    label: "IN\nTJ",
                    description: "The Mastermind"
                },
                {
                    value: "enfj",
                    label: "EN\nFJ",
                    description: "The Giver"
                },
                {
                    value: "istp",
                    label: "IS\nTP",
                    description: "The Craftsman"
                },
                {
                    value: "esfj",
                    label: "ES\nFJ",
                    description: "The Provider"
                },
                {
                    value: "infp",
                    label: "IN\nFP",
                    description: "The Idealist"
                },
                {
                    value: "esfp",
                    label: "ES\nFP",
                    description: "The Performer"
                },
                {
                    value: "enfp",
                    label: "EN\nFP",
                    description: "The Champion"
                },
                {
                    value: "estp",
                    label: "ES\nTP",
                    description: "The Doer"
                },
                {
                    value: "estj",
                    label: "ES\nTJ",
                    description: "The Supervisor"
                },
                {
                    value: "entj",
                    label: "EN\nTJ",
                    description: "The Commander"
                },
                {
                    value: "intp",
                    label: "IN\nTP",
                    description: "The Thinker"
                },
                {
                    value: "isfj",
                    label: "IS\nFJ",
                    description: "The Nurturer"
                },
                {
                    value: "entp",
                    label: "EN\nTP",
                    description: "The Visionary"
                },
                {
                    value: "isfp",
                    label: "IS\nFP",
                    description: "The Composer"
                }
            ]
        }
    },
    languages: [
        {
            lang: "ja",
            label: "日本語",
            default: true
        },
        {
            lang: "en",
            label: "English"
        }
    ],
    messages: {
        en: {
            introduction: [
                "Scan QR code of people around you",
                "Collect different MBTI types",
                "Aim for Bingo and win a prize!"
            ],
            congratulation: [
                "Congrats!",
                "Show this screen to event staff",
                "and get an awesome prize!"
            ]
        },
        ja: {
            introduction: [
                "近くの人のQRコードをスキャン",
                "いろんなMBTIタイプを集めよう！",
                "ビンゴを狙って商品をもらおう！"
            ],
            congratulation: [
                "おめでとうございます！",
                "お近くのスタッフにこちらの",
                "画面を見せて、素敵なギフトを",
                "お受け取りください。"
            ]
        }
    }
}

export default config;
