import React from 'react';
import { Config } from "./config.d";

const config: Config = {
    application: {
        name: "MINGLINGO",
    },
    bingo: {
        sheet: {
            width: 4,
            height: 4,
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
                },
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
            start_btn: "START!",
            introduction: [
                "Scan QR code of people around you",
                "Collect different trait tags",
                "Aim for Bingo and win a prize!"
            ],
            congratulation: [
                "Congrats!",
                "Show this screen to event staff",
                "and get an awesome prize!"
            ],
            total_bingo_count: (args) => <span>You have {args[0]} bingo!</span>,
            found: (args) => <span>Found <b>{args.join(', ')}</b>!</span>,
            banner_message: (args) => <span>Vote for best dressed <a href={args[0]} target="_blank" rel="noopener noreferrer">here!</a></span>,
        },
        ja: {
            start_btn: "スタート！",
            introduction: [
                "近くの人のQRコードをスキャン",
                "いろんなタイプのタグを集めよう！",
                "ビンゴを狙って商品をもらおう！"
            ],
            congratulation: [
                "おめでとうございます！",
                "お近くのスタッフにこちらの",
                "画面を見せて、素敵なギフトを",
                "お受け取りください。"
            ],
            total_bingo_count: (args) => <span>{args[0]}ビンゴ達成！</span>,
            found: (args) => <span><b>{args.join(', ')}</b> をみつけました！</span>,
            banner_message: (args) => <span>ベストドレッサーに<a href={args[0]} target="_blank" rel="noopener noreferrer">投票しよう</a></span>,
        }
    }
}

export default config;
