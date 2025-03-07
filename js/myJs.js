const textConfig = {
  text1: "He luuuuuuuuu!",
  text2: "Chúc em ngày 8/3 thật xinh đẹp!",
  text7: "Nhớ giữ lời nhá.hehe! Nào, hãy gửi anh 1 tính từ mà em cảm nhận về anh!",
  text8: "Gửi anh ạ!",
  text9: "Ôi, rất đáng yêu ạ. hehe!",
  text10: "Cảm ơn em vì đã xem hết trang web này!",
  text11:
    "Giờ thì chúc em ngủ ngon, mai sẽ 1 ngày thật vui và ý nghĩa nha!",
  text12: "Bắn em 1 hình tym nè!",
};

$(document).ready(function () {
  let data = [
    {
        "id": "1174307522240221184",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@5890428264665291092> b báo cod chốt ca lại rồi thao tác nhé b",
        "status": 1,
        "created_at": "2023-11-15T11:18:50.880Z",
        "score": "1174307522240221184",
        "ref_id": "2023-11-15T11:18:46.261Z",
        "is_pin": 0,
        "sender": {
            "id": "3563786922639689455",
            "user_key": "user_291768",
            "user_type": "user",
            "user_id": "291768",
            "username": "phuongnt86",
            "fullname": "Nguyễn Thị Phượng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/9ff8232a51d74659b253e74f39f7d2b4.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "5890428264665291092",
                "user_key": "user_559440",
                "user_type": "user",
                "user_id": "559440",
                "username": "datvt81",
                "fullname": "Võ Thành Đạt",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d2054a0d4686a366d9e52cab26cf759.jpg",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1174307116890370048",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-15T11:17:14.237Z",
        "score": "1174307116890370048",
        "ref_id": "2023-11-15T11:17:02.461Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "b2dd2db34fc328108105a2a1e889245d",
                "name": "Screenshot_20231115-181244_GHTK, Co.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/b2dd2db34fc328108105a2a1e889245d.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 464193,
                "height": 2280,
                "width": 1080
            },
            {
                "id": "2d187ba65cbd6f7bb380ec44ee6a8b52",
                "name": "Screenshot_20231115-181316_GHTK, Co.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/2d187ba65cbd6f7bb380ec44ee6a8b52.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 382385,
                "height": 2280,
                "width": 1080
            }
        ],
        "sender": {
            "id": "5890428264665291092",
            "user_key": "user_559440",
            "user_type": "user",
            "user_id": "559440",
            "username": "datvt81",
            "fullname": "Võ Thành Đạt",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d2054a0d4686a366d9e52cab26cf759.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174307075211493376",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-15T11:17:04.300Z",
        "score": "1174307075211493376",
        "ref_id": "2023-11-15T11:17:02.461Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "b2dd2db34fc328108105a2a1e889245d",
                "name": "Screenshot_20231115-181244_GHTK, Co.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/b2dd2db34fc328108105a2a1e889245d.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 464193,
                "height": 2280,
                "width": 1080
            },
            {
                "id": "2d187ba65cbd6f7bb380ec44ee6a8b52",
                "name": "Screenshot_20231115-181316_GHTK, Co.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/2d187ba65cbd6f7bb380ec44ee6a8b52.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 382385,
                "height": 2280,
                "width": 1080
            }
        ],
        "sender": {
            "id": "5890428264665291092",
            "user_key": "user_559440",
            "user_type": "user",
            "user_id": "559440",
            "username": "datvt81",
            "fullname": "Võ Thành Đạt",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d2054a0d4686a366d9e52cab26cf759.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174273991292211200",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "mình thử lại được rồi ạ, cám ơn b",
        "status": 1,
        "created_at": "2023-11-15T09:05:36.479Z",
        "score": "1174273991292211200",
        "ref_id": "2023-11-15T09:05:37.214Z",
        "is_pin": 0,
        "sender": {
            "id": "5598344074544982278",
            "user_key": "user_569214",
            "user_type": "user",
            "user_id": "569214",
            "username": "ngadt17",
            "fullname": "Đỗ Thị Nga",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ada6114961ce4b2aa69a8887f00a37a9.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        },
        "quote_message": {
            "id": "1174270322760966144",
            "msg_type": "quote_message",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "Em thấy đang để thời gian tạo lọc từ năm 2022 đến 2023 đó ạ",
            "status": 1,
            "created_at": "2023-11-15T08:51:01.833Z",
            "score": "9076897713034150834",
            "ref_id": "2023-11-15T08:50:57.248Z",
            "is_pin": 0,
            "sender": {
                "id": "1247351966323062663",
                "user_key": "user_712224",
                "user_type": "user",
                "user_id": "712224",
                "username": "hauht15",
                "fullname": "Hà Thị Hậu",
                "avatar": "https://cache.giaohangtietkiem.vn/d/2ba46ae1f540a18b2fb81426f5043068.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1174270322760966144",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Em thấy đang để thời gian tạo lọc từ năm 2022 đến 2023 đó ạ",
        "status": 1,
        "created_at": "2023-11-15T08:51:01.833Z",
        "score": "1174270322760966144",
        "ref_id": "2023-11-15T08:50:57.248Z",
        "is_pin": 0,
        "sender": {
            "id": "1247351966323062663",
            "user_key": "user_712224",
            "user_type": "user",
            "user_id": "712224",
            "username": "hauht15",
            "fullname": "Hà Thị Hậu",
            "avatar": "https://cache.giaohangtietkiem.vn/d/2ba46ae1f540a18b2fb81426f5043068.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1174273808286334976
            }
        ],
        "quote_message": {
            "id": "1174249941211836416",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "status": 1,
            "created_at": "2023-11-15T07:30:02.493Z",
            "score": "1310532728561561086",
            "ref_id": "2023-11-15T07:30:03.405Z",
            "is_pin": 0,
            "attachments": [
                {
                    "id": "b5b014185dd0de937425947744ccaa6f",
                    "name": "bandicam 2023-11-15 14-28-38-090.jpg",
                    "url": "https://cache.giaohangtietkiem.vn/d/b5b014185dd0de937425947744ccaa6f.jpg",
                    "ext": "jpg",
                    "mime": "image/jpeg",
                    "mine": "image/jpeg",
                    "size": 304688,
                    "height": 802,
                    "width": 1778
                }
            ],
            "sender": {
                "id": "5598344074544982278",
                "user_key": "user_569214",
                "user_type": "user",
                "user_id": "569214",
                "username": "ngadt17",
                "fullname": "Đỗ Thị Nga",
                "avatar": "https://cache.giaohangtietkiem.vn/d/ada6114961ce4b2aa69a8887f00a37a9.jpg",
                "status_id": 3,
                "properties": [
                    {
                        "size": "big",
                        "type": "THA_TIM",
                        "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                        "name": "Thả tim"
                    }
                ]
            }
        }
    },
    {
        "id": "1174259585846091776",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "uhm đúng r",
        "status": 1,
        "created_at": "2023-11-15T08:08:21.953Z",
        "score": "1174259585846091776",
        "ref_id": "2023-11-15T08:08:19.945Z",
        "is_pin": 0,
        "sender": {
            "id": "8756301142317577846",
            "user_key": "user_730540",
            "user_type": "user",
            "user_id": "730540",
            "username": "anhnn172",
            "fullname": "Nguyễn Ngọc Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/61cba9baa039427abd20e3a50e9da87f.png",
            "status_id": 3
        }
    },
    {
        "id": "1174256156222480384",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "VH lọc all mã bao đúng ko ạ",
        "status": 1,
        "created_at": "2023-11-15T07:54:44.267Z",
        "score": "1174256156222480384",
        "ref_id": "2023-11-15T07:54:39.777Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174255835999825920",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "đang chọn bao hàng bạn",
        "status": 1,
        "created_at": "2023-11-15T07:53:27.920Z",
        "score": "1174255835999825920",
        "ref_id": "2023-11-15T07:53:25.959Z",
        "is_pin": 0,
        "sender": {
            "id": "8756301142317577846",
            "user_key": "user_730540",
            "user_type": "user",
            "user_id": "730540",
            "username": "anhnn172",
            "fullname": "Nguyễn Ngọc Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/61cba9baa039427abd20e3a50e9da87f.png",
            "status_id": 3
        }
    },
    {
        "id": "1174255165460819968",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "đang search mã hộp à",
        "status": 1,
        "created_at": "2023-11-15T07:50:48.051Z",
        "score": "1174255165460819968",
        "ref_id": "2023-11-15T07:50:43.558Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174252990282252288",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@8881073744008496653>",
        "status": 1,
        "created_at": "2023-11-15T07:42:09.448Z",
        "score": "1174252990282252288",
        "ref_id": "2023-11-15T07:42:07.532Z",
        "is_pin": 0,
        "sender": {
            "id": "8756301142317577846",
            "user_key": "user_730540",
            "user_type": "user",
            "user_id": "730540",
            "username": "anhnn172",
            "fullname": "Nguyễn Ngọc Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/61cba9baa039427abd20e3a50e9da87f.png",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "8881073744008496653",
                "user_key": "user_299168",
                "user_type": "user",
                "user_id": "299168",
                "username": "huongntt29",
                "fullname": "Nguyễn Thị Thu Hương",
                "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1174252866739019776",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "vậy giờ cần action gì",
        "status": 1,
        "created_at": "2023-11-15T07:41:39.993Z",
        "score": "1174252866739019776",
        "ref_id": "2023-11-15T07:41:38.073Z",
        "is_pin": 0,
        "sender": {
            "id": "8756301142317577846",
            "user_key": "user_730540",
            "user_type": "user",
            "user_id": "730540",
            "username": "anhnn172",
            "fullname": "Nguyễn Ngọc Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/61cba9baa039427abd20e3a50e9da87f.png",
            "status_id": 3
        }
    },
    {
        "id": "1174252843984883712",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<7 ngày r",
        "status": 1,
        "created_at": "2023-11-15T07:41:34.568Z",
        "score": "1174252843984883712",
        "ref_id": "2023-11-15T07:41:32.646Z",
        "is_pin": 0,
        "sender": {
            "id": "8756301142317577846",
            "user_key": "user_730540",
            "user_type": "user",
            "user_id": "730540",
            "username": "anhnn172",
            "fullname": "Nguyễn Ngọc Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/61cba9baa039427abd20e3a50e9da87f.png",
            "status_id": 3
        }
    },
    {
        "id": "1174252831703900160",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "bạn ấy đã giới hạn thời gian r mà",
        "status": 1,
        "created_at": "2023-11-15T07:41:31.640Z",
        "score": "1174252831703900160",
        "ref_id": "2023-11-15T07:41:29.653Z",
        "is_pin": 0,
        "sender": {
            "id": "8756301142317577846",
            "user_key": "user_730540",
            "user_type": "user",
            "user_id": "730540",
            "username": "anhnn172",
            "fullname": "Nguyễn Ngọc Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/61cba9baa039427abd20e3a50e9da87f.png",
            "status_id": 3
        }
    },
    {
        "id": "1174250711982358528",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "mình thấy có thông báo rõ ràng mà nhỉ",
        "status": 1,
        "created_at": "2023-11-15T07:33:06.259Z",
        "score": "1174250711982358528",
        "ref_id": "2023-11-15T07:33:01.740Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174250016159739904",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "anh chị check giúp e với ạ\ncheck các bao đã tạo của XLHH thì hệ thống bao như này ạ <@all>",
        "status": 1,
        "created_at": "2023-11-15T07:30:20.362Z",
        "score": "1174250016159739904",
        "ref_id": "2023-11-15T07:30:21.376Z",
        "is_pin": 0,
        "sender": {
            "id": "5598344074544982278",
            "user_key": "user_569214",
            "user_type": "user",
            "user_id": "569214",
            "username": "ngadt17",
            "fullname": "Đỗ Thị Nga",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ada6114961ce4b2aa69a8887f00a37a9.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1174249959381573632",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all>",
        "status": 1,
        "created_at": "2023-11-15T07:30:06.825Z",
        "score": "1174249959381573632",
        "ref_id": "2023-11-15T07:30:07.849Z",
        "is_pin": 0,
        "sender": {
            "id": "5598344074544982278",
            "user_key": "user_569214",
            "user_type": "user",
            "user_id": "569214",
            "username": "ngadt17",
            "fullname": "Đỗ Thị Nga",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ada6114961ce4b2aa69a8887f00a37a9.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1174249941211836416",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-15T07:30:02.493Z",
        "score": "1174249941211836416",
        "ref_id": "2023-11-15T07:30:03.405Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "b5b014185dd0de937425947744ccaa6f",
                "name": "bandicam 2023-11-15 14-28-38-090.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/b5b014185dd0de937425947744ccaa6f.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 304688,
                "height": 802,
                "width": 1778
            }
        ],
        "sender": {
            "id": "5598344074544982278",
            "user_key": "user_569214",
            "user_type": "user",
            "user_id": "569214",
            "username": "ngadt17",
            "fullname": "Đỗ Thị Nga",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ada6114961ce4b2aa69a8887f00a37a9.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1174249907082694656",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "anh chị check giúp e với ja\ncheck các bao đã tạo của XLHH thì hệ thống bao như này ạ",
        "status": 1,
        "created_at": "2023-11-15T07:29:54.356Z",
        "score": "1174249907082694656",
        "ref_id": "2023-11-15T07:29:55.360Z",
        "is_pin": 0,
        "sender": {
            "id": "5598344074544982278",
            "user_key": "user_569214",
            "user_type": "user",
            "user_id": "569214",
            "username": "ngadt17",
            "fullname": "Đỗ Thị Nga",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ada6114961ce4b2aa69a8887f00a37a9.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1174233243150647296",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "dạ",
        "status": 1,
        "created_at": "2023-11-15T06:23:41.365Z",
        "score": "1174233243150647296",
        "ref_id": "2023-11-15T06:23:40.886Z",
        "is_pin": 0,
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174233111839670272",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "B báo cod tắt app vào lại nhé. Mình thao tác vẫn bình thường",
        "status": 1,
        "created_at": "2023-11-15T06:23:10.058Z",
        "score": "1174233111839670272",
        "ref_id": "2023-11-15T06:23:09.970Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174232931727847424",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "c ơi c kiểm lại giúp e chưa ạ",
        "status": 1,
        "created_at": "2023-11-15T06:22:27.116Z",
        "score": "1174232931727847424",
        "ref_id": "2023-11-15T06:22:26.646Z",
        "is_pin": 0,
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228937827643392",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Xóa pass hộ mình nhé",
        "status": 1,
        "created_at": "2023-11-15T06:06:34.896Z",
        "score": "1174228937827643392",
        "ref_id": "2023-11-15T06:06:34.784Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228893896507392",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Mình nhận tin ạ",
        "status": 1,
        "created_at": "2023-11-15T06:06:24.422Z",
        "score": "1174228893896507392",
        "ref_id": "2023-11-15T06:06:24.314Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228807108030464",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Tin nhắn đã được thu hồi",
        "status": -1,
        "created_at": "2023-11-15T06:06:03.730Z",
        "score": "1174228807108030464",
        "desc": "",
        "ref_id": "2023-11-15T06:06:03.254Z",
        "is_pin": 0,
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228661561454592",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Gửi mình tk nhé",
        "status": 1,
        "created_at": "2023-11-15T06:05:29.029Z",
        "score": "1174228661561454592",
        "ref_id": "2023-11-15T06:05:28.900Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228574492065792",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "bấm vào b0 đến điểm là bị ",
        "status": 1,
        "created_at": "2023-11-15T06:05:08.270Z",
        "score": "1174228574492065792",
        "ref_id": "2023-11-15T06:05:08.147Z",
        "is_pin": 0,
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228554460073984",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-15T06:05:03.494Z",
        "score": "1174228554460073984",
        "ref_id": "2023-11-15T06:04:54.307Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "1b8dec26e4142148cd276bdaa4be6ec6",
                "name": "IMG20231115130432.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/1b8dec26e4142148cd276bdaa4be6ec6.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 2469640,
                "height": 3000,
                "width": 3000
            }
        ],
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228368174039040",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "dạ nó quay vòng vòng k c",
        "status": 1,
        "created_at": "2023-11-15T06:04:19.080Z",
        "score": "1174228368174039040",
        "ref_id": "2023-11-15T06:04:18.583Z",
        "is_pin": 0,
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228211504373760",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Báo gì vậy b",
        "status": 1,
        "created_at": "2023-11-15T06:03:41.727Z",
        "score": "1174228211504373760",
        "ref_id": "2023-11-15T06:03:41.598Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174228063189360640",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "dạ anh chị kiểm tra giúp e app cod xuyennv kho nguyễn Văn khạ với ạ, app cod k cạp nhậtk vị trí để hoàn thành đơn dc, mặc dù đã cập nhật app mới ạ <@all>",
        "status": 1,
        "created_at": "2023-11-15T06:03:06.366Z",
        "score": "1174228063189360640",
        "ref_id": "2023-11-15T06:03:05.920Z",
        "is_pin": 0,
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174000351975796736",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@2285553391529896844> IT đang xử lý rồi nhé. bạn chờ 30 phút nữa là được",
        "status": 1,
        "created_at": "2023-11-14T14:58:15.782Z",
        "score": "1174000351975796736",
        "ref_id": "2023-11-14T14:58:11.937Z",
        "is_pin": 0,
        "sender": {
            "id": "2033511098230847162",
            "user_key": "user_609929",
            "user_type": "user",
            "user_id": "609929",
            "username": "thanhpd31",
            "fullname": "Phạm Duy Thanh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0b5a30d2f3e0420c9e840e3fa396cca0.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1174000440949792768
            }
        ],
        "mentions": [
            {
                "id": "2285553391529896844",
                "user_key": "user_734498",
                "user_type": "user",
                "user_id": "734498",
                "username": "datnv210",
                "fullname": "Nguyễn Văn Đạt",
                "avatar": "https://cache.giaohangtietkiem.vn/d/deeb18b13dc94563a2a83347e236a7bd.jpg",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1174000258023530496",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all>  giúp e với, e đang k vào đk màn quản lý bao hàng ạ ,",
        "status": 1,
        "created_at": "2023-11-14T14:57:53.382Z",
        "score": "1174000258023530496",
        "ref_id": "2023-11-14T14:57:51.749Z",
        "is_pin": 0,
        "sender": {
            "id": "2285553391529896844",
            "user_key": "user_734498",
            "user_type": "user",
            "user_id": "734498",
            "username": "datnv210",
            "fullname": "Nguyễn Văn Đạt",
            "avatar": "https://cache.giaohangtietkiem.vn/d/deeb18b13dc94563a2a83347e236a7bd.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1174000188955930624",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-14T14:57:36.915Z",
        "score": "1174000188955930624",
        "ref_id": "2023-11-14T14:57:35.038Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "5509387bb571155f0ace383a20efaa4b",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/5509387bb571155f0ace383a20efaa4b.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 56974,
                "height": 912,
                "width": 1919
            }
        ],
        "sender": {
            "id": "2285553391529896844",
            "user_key": "user_734498",
            "user_type": "user",
            "user_id": "734498",
            "username": "datnv210",
            "fullname": "Nguyễn Văn Đạt",
            "avatar": "https://cache.giaohangtietkiem.vn/d/deeb18b13dc94563a2a83347e236a7bd.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173999171228983296",
        "msg_type": "add_member",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Nguyễn Ngọc Bảo đã thêm Nguyễn Văn Đạt vào nhóm",
        "status": 1,
        "created_at": "2023-11-14T14:53:34.270Z",
        "score": "1173999171228983296",
        "desc": "{\"user_id\":[2285553391529896844]}",
        "is_pin": 0,
        "sender": {
            "id": "8922342696756041627",
            "user_key": "user_469807",
            "user_type": "user",
            "user_id": "469807",
            "username": "baonn19",
            "fullname": "Nguyễn Ngọc Bảo",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3df03ad3568546fdb68fe029dc42f413.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173820016851783680",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "B đổi trạng thái thành chờ chuyển kho giao rồi thao tác hủy giúp mình nhé",
        "status": 1,
        "created_at": "2023-11-14T03:01:40.538Z",
        "score": "1173820016851783680",
        "ref_id": "2023-11-14T03:01:37.163Z",
        "is_pin": 0,
        "sender": {
            "id": "3563786922639689455",
            "user_key": "user_291768",
            "user_type": "user",
            "user_id": "291768",
            "username": "phuongnt86",
            "fullname": "Nguyễn Thị Phượng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/9ff8232a51d74659b253e74f39f7d2b4.jpg",
            "status_id": 3
        },
        "quote_message": {
            "id": "1173814302368358400",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "1283911183\nAC check lại dùm em, đơn thu tiền cho shop đã hủy kho không claer đc trạng thái cuối ạ",
            "status": 1,
            "created_at": "2023-11-14T02:38:58.099Z",
            "score": "5286479918272893963",
            "ref_id": "2023-11-14T02:38:40.619Z",
            "is_pin": 0,
            "sender": {
                "id": "588425793969061353",
                "user_key": "user_659093",
                "user_type": "user",
                "user_id": "659093",
                "username": "mainth7",
                "fullname": "Nguyễn Thị Hồng Mai",
                "avatar": "https://cache.giaohangtietkiem.vn/d/7c2c93af845f4414bd76cc3edb439aed.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1173819514751430656",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Tin nhắn đã được thu hồi",
        "status": -1,
        "created_at": "2023-11-14T02:59:40.828Z",
        "score": "1173819514751430656",
        "desc": "",
        "ref_id": "2023-11-14T02:59:37.380Z",
        "is_pin": 0,
        "sender": {
            "id": "5032789645685384387",
            "user_key": "user_675797",
            "user_type": "user",
            "user_id": "675797",
            "username": "hoangpm35",
            "fullname": "Phan Minh Hoàng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/afc735e06b5753ee994ec0dcde085a83.png",
            "status_id": 3
        }
    },
    {
        "id": "1173818629430579200",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all> ",
        "status": 1,
        "created_at": "2023-11-14T02:56:09.751Z",
        "score": "1173818629430579200",
        "ref_id": "2023-11-14T02:56:08.774Z",
        "is_pin": 0,
        "sender": {
            "id": "588425793969061353",
            "user_key": "user_659093",
            "user_type": "user",
            "user_id": "659093",
            "username": "mainth7",
            "fullname": "Nguyễn Thị Hồng Mai",
            "avatar": "https://cache.giaohangtietkiem.vn/d/7c2c93af845f4414bd76cc3edb439aed.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173814302368358400",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "1283911183\nAC check lại dùm em, đơn thu tiền cho shop đã hủy kho không claer đc trạng thái cuối ạ",
        "status": 1,
        "created_at": "2023-11-14T02:38:58.099Z",
        "score": "1173814302368358400",
        "ref_id": "2023-11-14T02:38:40.619Z",
        "is_pin": 0,
        "sender": {
            "id": "588425793969061353",
            "user_key": "user_659093",
            "user_type": "user",
            "user_id": "659093",
            "username": "mainth7",
            "fullname": "Nguyễn Thị Hồng Mai",
            "avatar": "https://cache.giaohangtietkiem.vn/d/7c2c93af845f4414bd76cc3edb439aed.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173814228779286528",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-14T02:38:40.554Z",
        "score": "1173814228779286528",
        "ref_id": "2023-11-14T02:38:40.620Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "5ddc13a0be0f1a729ae7889272ee1ad5",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/5ddc13a0be0f1a729ae7889272ee1ad5.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 215150,
                "height": 763,
                "width": 1819
            }
        ],
        "sender": {
            "id": "588425793969061353",
            "user_key": "user_659093",
            "user_type": "user",
            "user_id": "659093",
            "username": "mainth7",
            "fullname": "Nguyễn Thị Hồng Mai",
            "avatar": "https://cache.giaohangtietkiem.vn/d/7c2c93af845f4414bd76cc3edb439aed.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173580651306790912",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "chị báo quản lý thêm config kho đích cho đơn nhé",
        "status": 1,
        "created_at": "2023-11-13T11:10:31.345Z",
        "score": "1173580651306790912",
        "ref_id": "2023-11-13T11:10:28.590Z",
        "is_pin": 0,
        "sender": {
            "id": "6234421606946464358",
            "user_key": "user_644928",
            "user_type": "user",
            "user_id": "644928",
            "username": "thuyntt91",
            "fullname": "Nguyễn Thị Thanh Thủy",
            "avatar": "https://cache.giaohangtietkiem.vn/d/96b2bf97461870f8e367adba9d548f32.png",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 0,
                "name": "LIKE",
                "count": 1,
                "me": false,
                "score": 1173802421360050176
            }
        ],
        "quote_message": {
            "id": "1173580303599140864",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "A/C check giúp e, đơn dễ vỡ e ko tạo bao được ạ",
            "status": 1,
            "created_at": "2023-11-13T11:09:08.445Z",
            "score": "702643978126822637",
            "ref_id": "2023-11-13T11:09:08.632Z",
            "is_pin": 0,
            "sender": {
                "id": "4355901249937645894",
                "user_key": "user_67553",
                "user_type": "user",
                "user_id": "67553",
                "username": "hanhntm1",
                "fullname": "Nguyễn Thị Mỹ Hạnh",
                "avatar": "https://cache.giaohangtietkiem.vn/d/00605092eeb647bd8eba9eb09c579848.jpg",
                "status_id": 3,
                "properties": [
                    {
                        "size": "big",
                        "type": "THA_TIM",
                        "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                        "name": "Thả tim"
                    }
                ]
            }
        }
    },
    {
        "id": "1173580303599140864",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "A/C check giúp e, đơn dễ vỡ e ko tạo bao được ạ",
        "status": 1,
        "created_at": "2023-11-13T11:09:08.445Z",
        "score": "1173580303599140864",
        "ref_id": "2023-11-13T11:09:08.632Z",
        "is_pin": 0,
        "sender": {
            "id": "4355901249937645894",
            "user_key": "user_67553",
            "user_type": "user",
            "user_id": "67553",
            "username": "hanhntm1",
            "fullname": "Nguyễn Thị Mỹ Hạnh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/00605092eeb647bd8eba9eb09c579848.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1173580208472223744",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-13T11:08:45.765Z",
        "score": "1173580208472223744",
        "ref_id": "2023-11-13T11:08:45.246Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "dc31c13144a1f235d310432e65627b33",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/dc31c13144a1f235d310432e65627b33.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 312487,
                "height": 1600,
                "width": 720
            },
            {
                "id": "638f4b366ee0ed5b5c35311a39fe6589",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/638f4b366ee0ed5b5c35311a39fe6589.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 344245,
                "height": 1600,
                "width": 720
            }
        ],
        "sender": {
            "id": "4355901249937645894",
            "user_key": "user_67553",
            "user_type": "user",
            "user_id": "67553",
            "username": "hanhntm1",
            "fullname": "Nguyễn Thị Mỹ Hạnh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/00605092eeb647bd8eba9eb09c579848.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1173580139392118784",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "**S4727496.BO.MB5-02-B11.1193746208**",
        "status": 1,
        "created_at": "2023-11-13T11:08:29.295Z",
        "score": "1173580139392118784",
        "ref_id": "2023-11-13T11:08:29.432Z",
        "is_pin": 0,
        "sender": {
            "id": "4355901249937645894",
            "user_key": "user_67553",
            "user_type": "user",
            "user_id": "67553",
            "username": "hanhntm1",
            "fullname": "Nguyễn Thị Mỹ Hạnh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/00605092eeb647bd8eba9eb09c579848.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1173530862544232448",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "b chọn quên mk rồi  cập nhật  lại mk mới nhé b",
        "status": 1,
        "created_at": "2023-11-13T07:52:40.779Z",
        "score": "1173530862544232448",
        "ref_id": "2023-11-13T07:52:38.119Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1173532127584124928
            }
        ]
    },
    {
        "id": "1173530454652653568",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "app bị s mà e đăng nhập vô cứ báo là đăng nhập k thành công vui lòng liên hệ NS ạ",
        "status": 1,
        "created_at": "2023-11-13T07:51:03.530Z",
        "score": "1173530454652653568",
        "ref_id": "2023-11-13T07:51:01.883Z",
        "is_pin": 0,
        "sender": {
            "id": "2860380512931016817",
            "user_key": "user_553697",
            "user_type": "user",
            "user_id": "553697",
            "username": "hoaltd1",
            "fullname": "Lê Thị Diệu Hoa",
            "avatar": "https://cache.giaohangtietkiem.vn/d/3635b64b3dbb4da2ad265b9ca4fb81ab.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173525752678260736",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all> mọi ng thử lại giúp xem đã sử dụng bình thường chưa ạ?",
        "status": 1,
        "created_at": "2023-11-13T07:32:22.492Z",
        "score": "1173525752678260736",
        "ref_id": "2023-11-13T07:32:19.874Z",
        "is_pin": 0,
        "sender": {
            "id": "5010068817819369891",
            "user_key": "user_670878",
            "user_type": "user",
            "user_id": "670878",
            "username": "hoangns6",
            "fullname": "Nguyễn Sỹ Hoàng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/fc09e94f58384525ab8ad1ffa86bb747.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173524596359188480",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "cod đang thap tác hàng trên điểm ngoài đường ạ, nhanh giúp e",
        "status": 1,
        "created_at": "2023-11-13T07:27:46.804Z",
        "score": "1173524596359188480",
        "ref_id": "2023-11-13T07:27:47.363Z",
        "is_pin": 0,
        "sender": {
            "id": "9000052834733344535",
            "user_key": "user_615438",
            "user_type": "user",
            "user_id": "615438",
            "username": "hiennt199",
            "fullname": "Nguyễn Thanh Hiển",
            "avatar": "https://cache.giaohangtietkiem.vn/d/f9135064dbbe4dc1ab9e87ea00f0c107.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173524444424499200",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "hệ thống đang bị cao tải, mọi ng chịu khó chờ chút nữa, it đang xử lý rồi ạ.  khi nào xong sẽ  báo   lại  vận hành ạ",
        "status": 1,
        "created_at": "2023-11-13T07:27:10.580Z",
        "score": "1173524444424499200",
        "ref_id": "2023-11-13T07:27:07.931Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173524391140245504",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "app chậm rì thế này",
        "status": 1,
        "created_at": "2023-11-13T07:26:57.876Z",
        "score": "1173524391140245504",
        "ref_id": "2023-11-13T07:26:58.429Z",
        "is_pin": 0,
        "sender": {
            "id": "9000052834733344535",
            "user_key": "user_615438",
            "user_type": "user",
            "user_id": "615438",
            "username": "hiennt199",
            "fullname": "Nguyễn Thanh Hiển",
            "avatar": "https://cache.giaohangtietkiem.vn/d/f9135064dbbe4dc1ab9e87ea00f0c107.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173524285569548288",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "mình sửa xong anh chị ơi",
        "status": 1,
        "created_at": "2023-11-13T07:26:32.706Z",
        "score": "1173524285569548288",
        "ref_id": "2023-11-13T07:26:33.267Z",
        "is_pin": 0,
        "sender": {
            "id": "9000052834733344535",
            "user_key": "user_615438",
            "user_type": "user",
            "user_id": "615438",
            "username": "hiennt199",
            "fullname": "Nguyễn Thanh Hiển",
            "avatar": "https://cache.giaohangtietkiem.vn/d/f9135064dbbe4dc1ab9e87ea00f0c107.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173519955764310016",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "app lỗi ạ, cod, đp vào app bắn hàng k dc ạ <@all>",
        "status": 1,
        "created_at": "2023-11-13T07:09:20.400Z",
        "score": "1173519955764310016",
        "ref_id": "2023-11-13T07:09:21.155Z",
        "is_pin": 0,
        "sender": {
            "id": "1710977574310952828",
            "user_key": "user_556730",
            "user_type": "user",
            "user_id": "556730",
            "username": "myltt4",
            "fullname": "Lê Thị Thiện Mỹ",
            "avatar": "https://cache.giaohangtietkiem.vn/image/show/f279936c-0364-4e47-82f3-4d31711d5c42/3cbeb6b0-2d3f-42dc-8eb5-8a18230333c7.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "TIN_NHIEM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/2d1ffb70-895d-4829-b948-d5064d9a9388/016aaccc-cb0e-473a-9adc-da29c5b54501.png",
                    "name": "Tín nhiệm"
                },
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1173519828542672896",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all> mọi người chờ chút IT đang xử lý",
        "status": 1,
        "created_at": "2023-11-13T07:08:50.068Z",
        "score": "1173519828542672896",
        "ref_id": "2023-11-13T07:08:47.391Z",
        "is_pin": 0,
        "sender": {
            "id": "5010068817819369891",
            "user_key": "user_670878",
            "user_type": "user",
            "user_id": "670878",
            "username": "hoangns6",
            "fullname": "Nguyễn Sỹ Hoàng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/fc09e94f58384525ab8ad1ffa86bb747.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1173520068171616256
            }
        ]
    },
    {
        "id": "1173519798356439040",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Thứ 2 trời ơi, hết cứu",
        "status": 1,
        "created_at": "2023-11-13T07:08:42.871Z",
        "score": "1173519798356439040",
        "ref_id": "2023-11-13T07:08:42.757Z",
        "is_pin": 0,
        "sender": {
            "id": "4080325088929143244",
            "user_key": "user_614281",
            "user_type": "user",
            "user_id": "614281",
            "username": "thaoltx",
            "fullname": "Lâm Thị Xuân Thảo",
            "avatar": "https://cache.giaohangtietkiem.vn/d/a578111eb3c34d4682b5dc18d26f085c.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 0,
                "name": "LIKE",
                "count": 1,
                "me": false,
                "score": 1173520241341861888
            }
        ]
    },
    {
        "id": "1173519699307753472",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all> ",
        "status": 1,
        "created_at": "2023-11-13T07:08:19.256Z",
        "score": "1173519699307753472",
        "ref_id": "2023-11-13T07:08:17.864Z",
        "is_pin": 0,
        "sender": {
            "id": "2381353113803410055",
            "user_key": "user_715486",
            "user_type": "user",
            "user_id": "715486",
            "username": "sangnv188",
            "fullname": "Nguyễn Văn Sang",
            "avatar": "https://cache.giaohangtietkiem.vn/d/192476d2de2de8d0d9372dd8089da0d8.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173519691917451264",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "IT đang check mn đợi chút ạ",
        "status": 1,
        "created_at": "2023-11-13T07:08:17.494Z",
        "score": "1173519691917451264",
        "ref_id": "2023-11-13T07:08:14.653Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173519641329987584",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all> <@242885275398654889> anh chị it xem giúp em với app giám sát xe bị lỗi không sửa được điểm hco lái",
        "status": 1,
        "created_at": "2023-11-13T07:08:05.433Z",
        "score": "1173519641329987584",
        "ref_id": "2023-11-13T07:07:40.240Z",
        "is_pin": 0,
        "sender": {
            "id": "7545266755893093630",
            "user_key": "user_688799",
            "user_type": "user",
            "user_id": "688799",
            "username": "ngocntb41",
            "fullname": "Nguyễn Thị Bích Ngọc",
            "avatar": "https://cache.giaohangtietkiem.vn/d/09c917b3464f688e50c292de67394e64.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "242885275398654889",
                "user_key": "user_283731",
                "user_type": "user",
                "user_id": "283731",
                "username": "liemnt19",
                "fullname": "Nguyễn Thị Liêm",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1173519599521091584",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-13T07:07:55.465Z",
        "score": "1173519599521091584",
        "ref_id": "2023-11-13T07:07:53.704Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "0a8a0ca0c8a382a778ec1813265fb508",
                "name": "Screenshot_2023-11-13-14-06-49-209_vn.ghtk.xteam.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/0a8a0ca0c8a382a778ec1813265fb508.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 177903,
                "height": 2340,
                "width": 1080
            }
        ],
        "sender": {
            "id": "2381353113803410055",
            "user_key": "user_715486",
            "user_type": "user",
            "user_id": "715486",
            "username": "sangnv188",
            "fullname": "Nguyễn Văn Sang",
            "avatar": "https://cache.giaohangtietkiem.vn/d/192476d2de2de8d0d9372dd8089da0d8.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173519539693674496",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all> hệ thống đang chậm đồng bộ ,mn dừng 1 lúc hãy thao tác nhé ,bên m đang check r",
        "status": 1,
        "created_at": "2023-11-13T07:07:41.201Z",
        "score": "1173519539693674496",
        "ref_id": "2023-11-13T07:07:38.477Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173519537265184768",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-13T07:07:40.622Z",
        "score": "1173519537265184768",
        "ref_id": "2023-11-13T07:07:40.241Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "a73945a7e96f766d6cc2c15bd386279c",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/a73945a7e96f766d6cc2c15bd386279c.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 114383,
                "height": 917,
                "width": 414
            }
        ],
        "sender": {
            "id": "7545266755893093630",
            "user_key": "user_688799",
            "user_type": "user",
            "user_id": "688799",
            "username": "ngocntb41",
            "fullname": "Nguyễn Thị Bích Ngọc",
            "avatar": "https://cache.giaohangtietkiem.vn/d/09c917b3464f688e50c292de67394e64.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173519343412752384",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-13T07:06:54.404Z",
        "score": "1173519343412752384",
        "ref_id": "2023-11-13T07:06:53.697Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "581c65a69e108640d8ae81b832298438",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/581c65a69e108640d8ae81b832298438.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 1225594,
                "height": 1908,
                "width": 859
            }
        ],
        "sender": {
            "id": "2164128924990291821",
            "user_key": "user_608361",
            "user_type": "user",
            "user_id": "608361",
            "username": "thulta4",
            "fullname": "Lê Thị Anh Thư",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0ec68a71a5664418903ebd10560a4d8f.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173519311271800832",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "app lỗi rồi a/c IT ơi <@all>",
        "status": 1,
        "created_at": "2023-11-13T07:06:46.741Z",
        "score": "1173519311271800832",
        "ref_id": "2023-11-13T07:06:46.862Z",
        "is_pin": 0,
        "sender": {
            "id": "2164128924990291821",
            "user_key": "user_608361",
            "user_type": "user",
            "user_id": "608361",
            "username": "thulta4",
            "fullname": "Lê Thị Anh Thư",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0ec68a71a5664418903ebd10560a4d8f.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173165171949260800",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Những đơn đã được quét trong phiên r thì chỉ được tạo bao ở phiên đó thôi ,lưu ý giúp m",
        "status": 1,
        "created_at": "2023-11-12T07:39:33.347Z",
        "score": "1173165171949260800",
        "ref_id": "2023-11-12T07:39:33.136Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1173176099893743616
            }
        ]
    },
    {
        "id": "1173165063912378368",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Quét ở màn xử lý hàng LV giúp mình nhé",
        "status": 1,
        "created_at": "2023-11-12T07:39:07.589Z",
        "score": "1173165063912378368",
        "ref_id": "2023-11-12T07:39:07.377Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        },
        "quote_message": {
            "id": "1173164149528936448",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "Ac ơi check giúp e đơn quét báo lỗi không tạo được bao ạ <@all>",
            "status": 1,
            "created_at": "2023-11-12T07:35:29.583Z",
            "score": "3070250605980740975",
            "ref_id": "2023-11-12T07:35:29.471Z",
            "is_pin": 0,
            "sender": {
                "id": "8947121710123859959",
                "user_key": "user_734833",
                "user_type": "user",
                "user_id": "734833",
                "username": "quangtm68",
                "fullname": "Trần Minh Quang",
                "avatar": "https://cache.giaohangtietkiem.vn/d/365b4f0cd09d417686ef733dd1b22332.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1173164519520964608",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "b cho mình muwnonj tk  nhé",
        "status": 1,
        "created_at": "2023-11-12T07:36:57.796Z",
        "score": "1173164519520964608",
        "ref_id": "2023-11-12T07:36:56.083Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173164149528936448",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Ac ơi check giúp e đơn quét báo lỗi không tạo được bao ạ <@all>",
        "status": 1,
        "created_at": "2023-11-12T07:35:29.583Z",
        "score": "1173164149528936448",
        "ref_id": "2023-11-12T07:35:29.471Z",
        "is_pin": 0,
        "sender": {
            "id": "8947121710123859959",
            "user_key": "user_734833",
            "user_type": "user",
            "user_id": "734833",
            "username": "quangtm68",
            "fullname": "Trần Minh Quang",
            "avatar": "https://cache.giaohangtietkiem.vn/d/365b4f0cd09d417686ef733dd1b22332.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1173163953172631552",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-12T07:34:42.768Z",
        "score": "1173163953172631552",
        "ref_id": "2023-11-12T07:34:36.331Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "49b2805e3e364038193ea94c198ba501",
                "name": "anh0.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/49b2805e3e364038193ea94c198ba501.jpg",
                "ext": "jpg",
                "mime": "image/png",
                "mine": "image/png",
                "size": 13895133,
                "height": 4032,
                "width": 3024
            }
        ],
        "sender": {
            "id": "8947121710123859959",
            "user_key": "user_734833",
            "user_type": "user",
            "user_id": "734833",
            "username": "quangtm68",
            "fullname": "Trần Minh Quang",
            "avatar": "https://cache.giaohangtietkiem.vn/d/365b4f0cd09d417686ef733dd1b22332.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1172839460881539072",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "check lại config đường đi giúp mình nhé ,đơn/bao phải đi qua kho TC hoặc đích mới xuất dc",
        "status": 1,
        "created_at": "2023-11-11T10:05:17.777Z",
        "score": "1172839460881539072",
        "ref_id": "2023-11-11T10:05:16.902Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 0,
                "name": "LIKE",
                "count": 1,
                "me": false,
                "score": 1172839532331356160
            }
        ]
    },
    {
        "id": "1172839052314329088",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Nhờ ac IT check giúp em đơn lẻ bắn đi bị sai tuyến, các đơn mt15 khác vẫn đi được bthuong <@all> ",
        "status": 1,
        "created_at": "2023-11-11T10:03:40.367Z",
        "score": "1172839052314329088",
        "ref_id": "2023-11-11T10:03:15.705Z",
        "is_pin": 0,
        "sender": {
            "id": "2627588128171836172",
            "user_key": "user_710164",
            "user_type": "user",
            "user_id": "710164",
            "username": "ducpt47",
            "fullname": "Phương Thiện Đức",
            "avatar": "https://cache.giaohangtietkiem.vn/d/148d0a5d4826671c5c3b4e0ba5996601.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1172838980621090816",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-11T10:03:23.274Z",
        "score": "1172838980621090816",
        "ref_id": "2023-11-11T10:03:15.668Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "a0b9caf68cbc5f5fcee96994b92bd60a",
                "name": "1699696996511.png",
                "url": "https://cache.giaohangtietkiem.vn/d/a0b9caf68cbc5f5fcee96994b92bd60a.png",
                "ext": "png",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 6837585,
                "height": 4624,
                "width": 3472
            }
        ],
        "sender": {
            "id": "2627588128171836172",
            "user_key": "user_710164",
            "user_type": "user",
            "user_id": "710164",
            "username": "ducpt47",
            "fullname": "Phương Thiện Đức",
            "avatar": "https://cache.giaohangtietkiem.vn/d/148d0a5d4826671c5c3b4e0ba5996601.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1172827699385946112",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "khanhnk8 từ <b>Đã điều phối lấy hàng/Đang lấy hàng</b> sang <b>Delay lấy hàng</b>   khanhnk8 Hóa đơn nhập hàng vào kho <b>BLH1908539760.T387439.111123</b> \nB Check lại log đh nhé",
        "status": 1,
        "created_at": "2023-11-11T09:18:33.618Z",
        "score": "1172827699385946112",
        "ref_id": "2023-11-11T09:18:32.817Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        },
        "quote_message": {
            "id": "1172826577862754304",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "**S21651196.BO.MB16-12-N5.3231616183**\n <@all> a./c check giúp e shop này b2c nhập hàng tại shop nhưng k vào trạng thái nhập kho mà delay ạ",
            "status": 1,
            "created_at": "2023-11-11T09:14:06.226Z",
            "score": "9116560222657744059",
            "ref_id": "2023-11-11T09:14:06.072Z",
            "is_pin": 0,
            "sender": {
                "id": "3946850564415337156",
                "user_key": "user_575114",
                "user_type": "user",
                "user_id": "575114",
                "username": "trangdn3",
                "fullname": "Đỗ Nguyện Trang",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d3fed7fe99570cbaaac9beb1431abd2.jpg",
                "status_id": 3,
                "properties": [
                    {
                        "size": "big",
                        "type": "TIN_NHIEM",
                        "icon": "https://cache.giaohangtietkiem.vn/image/show/2d1ffb70-895d-4829-b948-d5064d9a9388/016aaccc-cb0e-473a-9adc-da29c5b54501.png",
                        "name": "Tín nhiệm"
                    }
                ]
            }
        }
    },
    {
        "id": "1172826577862754304",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "**S21651196.BO.MB16-12-N5.3231616183**\n <@all> a./c check giúp e shop này b2c nhập hàng tại shop nhưng k vào trạng thái nhập kho mà delay ạ",
        "status": 1,
        "created_at": "2023-11-11T09:14:06.226Z",
        "score": "1172826577862754304",
        "ref_id": "2023-11-11T09:14:06.072Z",
        "is_pin": 0,
        "sender": {
            "id": "3946850564415337156",
            "user_key": "user_575114",
            "user_type": "user",
            "user_id": "575114",
            "username": "trangdn3",
            "fullname": "Đỗ Nguyện Trang",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d3fed7fe99570cbaaac9beb1431abd2.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "TIN_NHIEM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/2d1ffb70-895d-4829-b948-d5064d9a9388/016aaccc-cb0e-473a-9adc-da29c5b54501.png",
                    "name": "Tín nhiệm"
                }
            ]
        }
    },
    {
        "id": "1172800748927574016",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "thử lại giúp mình xem còn bị không <@2759205004628139435>",
        "status": 1,
        "created_at": "2023-11-11T07:31:28.128Z",
        "score": "1172800748927574016",
        "ref_id": "2023-11-11T07:31:27.303Z",
        "is_pin": 0,
        "sender": {
            "id": "4349966367842396575",
            "user_key": "user_587436",
            "user_type": "user",
            "user_id": "587436",
            "username": "binhcx3",
            "fullname": "Công Xuân Bình",
            "avatar": "https://cache.giaohangtietkiem.vn/d/e69383ac98ba45499eccf25ed6b2aae8.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1172802934503931904
            }
        ],
        "mentions": [
            {
                "id": "2759205004628139435",
                "user_key": "user_719656",
                "user_type": "user",
                "user_id": "719656",
                "username": "trunglq60",
                "fullname": "Lê Quang Trung",
                "avatar": "https://cache.giaohangtietkiem.vn/d/ebd1af39e30235886d0d134f8f2a9229.png",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1172799289423048704",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "để bên mình kiểm tra nhé <@2759205004628139435>",
        "status": 1,
        "created_at": "2023-11-11T07:25:40.155Z",
        "score": "1172799289423048704",
        "ref_id": "2023-11-11T07:25:39.344Z",
        "is_pin": 0,
        "sender": {
            "id": "4349966367842396575",
            "user_key": "user_587436",
            "user_type": "user",
            "user_id": "587436",
            "username": "binhcx3",
            "fullname": "Công Xuân Bình",
            "avatar": "https://cache.giaohangtietkiem.vn/d/e69383ac98ba45499eccf25ed6b2aae8.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 2,
                "me": false,
                "score": 1172799940333006848
            }
        ],
        "mentions": [
            {
                "id": "2759205004628139435",
                "user_key": "user_719656",
                "user_type": "user",
                "user_id": "719656",
                "username": "trunglq60",
                "fullname": "Lê Quang Trung",
                "avatar": "https://cache.giaohangtietkiem.vn/d/ebd1af39e30235886d0d134f8f2a9229.png",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1172798913194135552",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "gặp nhiều lần lắm rồi á, fix giúp kho Tân Bình với ạ <@all>",
        "status": 1,
        "created_at": "2023-11-11T07:24:10.455Z",
        "score": "1172798913194135552",
        "ref_id": "2023-11-11T07:24:09.391Z",
        "is_pin": 0,
        "sender": {
            "id": "2759205004628139435",
            "user_key": "user_719656",
            "user_type": "user",
            "user_id": "719656",
            "username": "trunglq60",
            "fullname": "Lê Quang Trung",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ebd1af39e30235886d0d134f8f2a9229.png",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 0,
                "name": "LIKE",
                "count": 1,
                "me": false,
                "score": 1172799180102692864
            }
        ]
    },
    {
        "id": "1172798839655358464",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "xlhh đang bắn hàng gặp lỗi nữa ạ",
        "status": 1,
        "created_at": "2023-11-11T07:23:52.922Z",
        "score": "1172798839655358464",
        "ref_id": "2023-11-11T07:23:51.844Z",
        "is_pin": 0,
        "sender": {
            "id": "2759205004628139435",
            "user_key": "user_719656",
            "user_type": "user",
            "user_id": "719656",
            "username": "trunglq60",
            "fullname": "Lê Quang Trung",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ebd1af39e30235886d0d134f8f2a9229.png",
            "status_id": 3
        }
    },
    {
        "id": "1172798804981100544",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-11T07:23:44.655Z",
        "score": "1172798804981100544",
        "ref_id": "2023-11-11T07:23:42.974Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "a6bbf0e63a6984c334881d1edaa43cb4",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/a6bbf0e63a6984c334881d1edaa43cb4.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 858534,
                "height": 1560,
                "width": 720
            }
        ],
        "sender": {
            "id": "2759205004628139435",
            "user_key": "user_719656",
            "user_type": "user",
            "user_id": "719656",
            "username": "trunglq60",
            "fullname": "Lê Quang Trung",
            "avatar": "https://cache.giaohangtietkiem.vn/d/ebd1af39e30235886d0d134f8f2a9229.png",
            "status_id": 3
        }
    },
    {
        "id": "1172726075254853632",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Điểm YN lúc 8h này không được nổ đơn xuất giao vào nên ko có đâu ạ. Anh báo TX đến nơi điểm YN lúc 14h và thao tác xuất giao thì sẽ thao tác được ạ",
        "status": 1,
        "created_at": "2023-11-11T02:34:44.537Z",
        "score": "1172726075254853632",
        "ref_id": "2023-11-11T02:34:43.261Z",
        "is_pin": 0,
        "sender": {
            "id": "1099370635630573689",
            "user_key": "user_665403",
            "user_type": "user",
            "user_id": "665403",
            "username": "anhlm8",
            "fullname": "Lê Mai Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/493a7eaf64ff4262a5160b051556f407.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 0,
                "name": "LIKE",
                "count": 1,
                "me": false,
                "score": 1172727652048928768
            }
        ],
        "quote_message": {
            "id": "1172725458989756416",
            "msg_type": "quote_message",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "mai anh ơi tx đến nơi điểm 8h rồi ấy mà không được",
            "status": 1,
            "created_at": "2023-11-11T02:32:17.608Z",
            "score": "5163316079501136493",
            "ref_id": "2023-11-11T02:32:16.685Z",
            "is_pin": 0,
            "sender": {
                "id": "2404587982325694757",
                "user_key": "user_702746",
                "user_type": "user",
                "user_id": "702746",
                "username": "hieuvv54",
                "fullname": "Vương Văn Hiếu",
                "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1172725804319350784",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "b báo cod  đợi chút nhé. bên mình đang check lại ạ",
        "status": 1,
        "created_at": "2023-11-11T02:33:39.941Z",
        "score": "1172725804319350784",
        "ref_id": "2023-11-11T02:33:39.394Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1172725860695097344
            }
        ],
        "quote_message": {
            "id": "1172725469433688064",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "check giúp em app COD: tripm63 không thao tác đến điểm được ạ <@242885275398654889>",
            "status": 1,
            "created_at": "2023-11-11T02:32:20.098Z",
            "score": "1869523890370115094",
            "ref_id": "2023-11-11T02:32:00.171Z",
            "is_pin": 0,
            "sender": {
                "id": "3202829810338429829",
                "user_key": "user_701645",
                "user_type": "user",
                "user_id": "701645",
                "username": "duonghh11",
                "fullname": "Huỳnh Hải Dương",
                "avatar": "https://cache.giaohangtietkiem.vn/d/2889e742c2dc084555134594d96924e3.jpg",
                "status_id": 3
            },
            "mentions": [
                {
                    "id": "242885275398654889",
                    "user_key": "user_283731",
                    "user_type": "user",
                    "user_id": "283731",
                    "username": "liemnt19",
                    "fullname": "Nguyễn Thị Liêm",
                    "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                    "status_id": 3
                }
            ]
        }
    },
    {
        "id": "1172725757099933696",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "thao tác điểm 14h thì 14h lái quay về thao tác điểm nào được em ơi . lúc đấy lại lọc đơn đẩy tay à ?",
        "status": 1,
        "created_at": "2023-11-11T02:33:28.683Z",
        "score": "1172725757099933696",
        "ref_id": "2023-11-11T02:33:27.694Z",
        "is_pin": 0,
        "sender": {
            "id": "2404587982325694757",
            "user_key": "user_702746",
            "user_type": "user",
            "user_id": "702746",
            "username": "hieuvv54",
            "fullname": "Vương Văn Hiếu",
            "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
            "status_id": 3
        },
        "quote_message": {
            "id": "1172725218769317888",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "status": 1,
            "created_at": "2023-11-11T02:31:20.335Z",
            "score": "6854629560650029559",
            "ref_id": "2023-11-11T02:31:19.078Z",
            "is_pin": 0,
            "attachments": [
                {
                    "id": "20af232daac3a29d43017b9df28fd564",
                    "name": "Ảnh chụp màn hình.png",
                    "url": "https://cache.giaohangtietkiem.vn/d/20af232daac3a29d43017b9df28fd564.png",
                    "ext": "png",
                    "mime": "image/png",
                    "mine": "image/png",
                    "size": 119310,
                    "height": 690,
                    "width": 1531
                }
            ],
            "sender": {
                "id": "1099370635630573689",
                "user_key": "user_665403",
                "user_type": "user",
                "user_id": "665403",
                "username": "anhlm8",
                "fullname": "Lê Mai Anh",
                "avatar": "https://cache.giaohangtietkiem.vn/d/493a7eaf64ff4262a5160b051556f407.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1172725469433688064",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "check giúp em app COD: tripm63 không thao tác đến điểm được ạ <@242885275398654889>",
        "status": 1,
        "created_at": "2023-11-11T02:32:20.098Z",
        "score": "1172725469433688064",
        "ref_id": "2023-11-11T02:32:00.171Z",
        "is_pin": 0,
        "sender": {
            "id": "3202829810338429829",
            "user_key": "user_701645",
            "user_type": "user",
            "user_id": "701645",
            "username": "duonghh11",
            "fullname": "Huỳnh Hải Dương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/2889e742c2dc084555134594d96924e3.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "242885275398654889",
                "user_key": "user_283731",
                "user_type": "user",
                "user_id": "283731",
                "username": "liemnt19",
                "fullname": "Nguyễn Thị Liêm",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1172725458989756416",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "mai anh ơi tx đến nơi điểm 8h rồi ấy mà không được",
        "status": 1,
        "created_at": "2023-11-11T02:32:17.608Z",
        "score": "1172725458989756416",
        "ref_id": "2023-11-11T02:32:16.685Z",
        "is_pin": 0,
        "sender": {
            "id": "2404587982325694757",
            "user_key": "user_702746",
            "user_type": "user",
            "user_id": "702746",
            "username": "hieuvv54",
            "fullname": "Vương Văn Hiếu",
            "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
            "status_id": 3
        },
        "quote_message": {
            "id": "1172725218769317888",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "status": 1,
            "created_at": "2023-11-11T02:31:20.335Z",
            "score": "5527921825936949662",
            "ref_id": "2023-11-11T02:31:19.078Z",
            "is_pin": 0,
            "attachments": [
                {
                    "id": "20af232daac3a29d43017b9df28fd564",
                    "name": "Ảnh chụp màn hình.png",
                    "url": "https://cache.giaohangtietkiem.vn/d/20af232daac3a29d43017b9df28fd564.png",
                    "ext": "png",
                    "mime": "image/png",
                    "mine": "image/png",
                    "size": 119310,
                    "height": 690,
                    "width": 1531
                }
            ],
            "sender": {
                "id": "1099370635630573689",
                "user_key": "user_665403",
                "user_type": "user",
                "user_id": "665403",
                "username": "anhlm8",
                "fullname": "Lê Mai Anh",
                "avatar": "https://cache.giaohangtietkiem.vn/d/493a7eaf64ff4262a5160b051556f407.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1172725386705334272",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-11T02:32:00.374Z",
        "score": "1172725386705334272",
        "ref_id": "2023-11-11T02:32:00.172Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "e4622c87156dd950b4a8bbf48dd032b2",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/e4622c87156dd950b4a8bbf48dd032b2.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 483958,
                "height": 1908,
                "width": 859
            }
        ],
        "sender": {
            "id": "3202829810338429829",
            "user_key": "user_701645",
            "user_type": "user",
            "user_id": "701645",
            "username": "duonghh11",
            "fullname": "Huỳnh Hải Dương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/2889e742c2dc084555134594d96924e3.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1172725286847307776",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "tund87\nduyTU@1991\nem gửi tk",
        "status": 1,
        "created_at": "2023-11-11T02:31:36.566Z",
        "score": "1172725286847307776",
        "ref_id": "2023-11-11T02:31:35.583Z",
        "is_pin": 0,
        "sender": {
            "id": "2404587982325694757",
            "user_key": "user_702746",
            "user_type": "user",
            "user_id": "702746",
            "username": "hieuvv54",
            "fullname": "Vương Văn Hiếu",
            "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
            "status_id": 3
        },
        "quote_message": {
            "id": "1172724352188325888",
            "msg_type": "quote_message",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "nhắn em xin tk+ mk với ạ",
            "status": 1,
            "created_at": "2023-11-11T02:27:53.726Z",
            "score": "5965642203090480035",
            "ref_id": "2023-11-11T02:27:53.139Z",
            "is_pin": 0,
            "sender": {
                "id": "8487467622436071293",
                "user_key": "user_669787",
                "user_type": "user",
                "user_id": "669787",
                "username": "luclv13",
                "fullname": "Lê Văn Lực",
                "avatar": "https://cache.giaohangtietkiem.vn/d/76f37a5b845a47fa904c5f1f99b1e472.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1172725218769317888",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-11T02:31:20.335Z",
        "score": "1172725218769317888",
        "ref_id": "2023-11-11T02:31:19.078Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "20af232daac3a29d43017b9df28fd564",
                "name": "Ảnh chụp màn hình.png",
                "url": "https://cache.giaohangtietkiem.vn/d/20af232daac3a29d43017b9df28fd564.png",
                "ext": "png",
                "mime": "image/png",
                "mine": "image/png",
                "size": 119310,
                "height": 690,
                "width": 1531
            }
        ],
        "sender": {
            "id": "1099370635630573689",
            "user_key": "user_665403",
            "user_type": "user",
            "user_id": "665403",
            "username": "anhlm8",
            "fullname": "Lê Mai Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/493a7eaf64ff4262a5160b051556f407.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1172725218463170560",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "anh <@2404587982325694757> ơi TX chưa xuất giao đơn tại hub nên chưa thao tác được với điểm giao ạ. Anh báo TX xuất giao tại điểm 14h là sẽ thao tác được ạ",
        "status": 1,
        "created_at": "2023-11-11T02:31:20.262Z",
        "score": "1172725218463170560",
        "ref_id": "2023-11-11T02:31:19.076Z",
        "is_pin": 0,
        "sender": {
            "id": "1099370635630573689",
            "user_key": "user_665403",
            "user_type": "user",
            "user_id": "665403",
            "username": "anhlm8",
            "fullname": "Lê Mai Anh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/493a7eaf64ff4262a5160b051556f407.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "2404587982325694757",
                "user_key": "user_702746",
                "user_type": "user",
                "user_id": "702746",
                "username": "hieuvv54",
                "fullname": "Vương Văn Hiếu",
                "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
                "status_id": 3
            }
        ],
        "quote_message": {
            "id": "1172721227474055168",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "<@8881073744008496653> <@242885275398654889>  check hộ mình app lái xe user: tund87 đơn bbs nổ vào app không hiện đơn ấn vào thao tác cũng không được luôn",
            "status": 1,
            "created_at": "2023-11-11T02:15:28.736Z",
            "score": "5236131056708076248",
            "ref_id": "2023-11-11T02:15:28.667Z",
            "is_pin": 0,
            "sender": {
                "id": "2404587982325694757",
                "user_key": "user_702746",
                "user_type": "user",
                "user_id": "702746",
                "username": "hieuvv54",
                "fullname": "Vương Văn Hiếu",
                "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
                "status_id": 3
            },
            "mentions": [
                {
                    "id": "8881073744008496653",
                    "user_key": "user_299168",
                    "user_type": "user",
                    "user_id": "299168",
                    "username": "huongntt29",
                    "fullname": "Nguyễn Thị Thu Hương",
                    "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
                    "status_id": 3
                },
                {
                    "id": "242885275398654889",
                    "user_key": "user_283731",
                    "user_type": "user",
                    "user_id": "283731",
                    "username": "liemnt19",
                    "fullname": "Nguyễn Thị Liêm",
                    "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                    "status_id": 3
                }
            ]
        }
    },
    {
        "id": "1172724352188325888",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "nhắn em xin tk+ mk với ạ",
        "status": 1,
        "created_at": "2023-11-11T02:27:53.726Z",
        "score": "1172724352188325888",
        "ref_id": "2023-11-11T02:27:53.139Z",
        "is_pin": 0,
        "sender": {
            "id": "8487467622436071293",
            "user_key": "user_669787",
            "user_type": "user",
            "user_id": "669787",
            "username": "luclv13",
            "fullname": "Lê Văn Lực",
            "avatar": "https://cache.giaohangtietkiem.vn/d/76f37a5b845a47fa904c5f1f99b1e472.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 0,
                "name": "LIKE",
                "count": 1,
                "me": false,
                "score": 1172724737854844928
            }
        ],
        "quote_message": {
            "id": "1172721227474055168",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "<@8881073744008496653> <@242885275398654889>  check hộ mình app lái xe user: tund87 đơn bbs nổ vào app không hiện đơn ấn vào thao tác cũng không được luôn",
            "status": 1,
            "created_at": "2023-11-11T02:15:28.736Z",
            "score": "1545766227747159582",
            "ref_id": "2023-11-11T02:15:28.667Z",
            "is_pin": 0,
            "sender": {
                "id": "2404587982325694757",
                "user_key": "user_702746",
                "user_type": "user",
                "user_id": "702746",
                "username": "hieuvv54",
                "fullname": "Vương Văn Hiếu",
                "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
                "status_id": 3
            },
            "mentions": [
                {
                    "id": "8881073744008496653",
                    "user_key": "user_299168",
                    "user_type": "user",
                    "user_id": "299168",
                    "username": "huongntt29",
                    "fullname": "Nguyễn Thị Thu Hương",
                    "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
                    "status_id": 3
                },
                {
                    "id": "242885275398654889",
                    "user_key": "user_283731",
                    "user_type": "user",
                    "user_id": "283731",
                    "username": "liemnt19",
                    "fullname": "Nguyễn Thị Liêm",
                    "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                    "status_id": 3
                }
            ]
        }
    },
    {
        "id": "1172724000231870464",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@8487467622436071293>  check nhé em",
        "status": 1,
        "created_at": "2023-11-11T02:26:29.813Z",
        "score": "1172724000231870464",
        "ref_id": "2023-11-11T02:26:29.733Z",
        "is_pin": 0,
        "sender": {
            "id": "8881073744008496653",
            "user_key": "user_299168",
            "user_type": "user",
            "user_id": "299168",
            "username": "huongntt29",
            "fullname": "Nguyễn Thị Thu Hương",
            "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "8487467622436071293",
                "user_key": "user_669787",
                "user_type": "user",
                "user_id": "669787",
                "username": "luclv13",
                "fullname": "Lê Văn Lực",
                "avatar": "https://cache.giaohangtietkiem.vn/d/76f37a5b845a47fa904c5f1f99b1e472.jpg",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1172721227474055168",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@8881073744008496653> <@242885275398654889>  check hộ mình app lái xe user: tund87 đơn bbs nổ vào app không hiện đơn ấn vào thao tác cũng không được luôn",
        "status": 1,
        "created_at": "2023-11-11T02:15:28.736Z",
        "score": "1172721227474055168",
        "ref_id": "2023-11-11T02:15:28.667Z",
        "is_pin": 0,
        "sender": {
            "id": "2404587982325694757",
            "user_key": "user_702746",
            "user_type": "user",
            "user_id": "702746",
            "username": "hieuvv54",
            "fullname": "Vương Văn Hiếu",
            "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "8881073744008496653",
                "user_key": "user_299168",
                "user_type": "user",
                "user_id": "299168",
                "username": "huongntt29",
                "fullname": "Nguyễn Thị Thu Hương",
                "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
                "status_id": 3
            },
            {
                "id": "242885275398654889",
                "user_key": "user_283731",
                "user_type": "user",
                "user_id": "283731",
                "username": "liemnt19",
                "fullname": "Nguyễn Thị Liêm",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                "status_id": 3
            }
        ]
    },
    {
        "id": "1172720835579056128",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-11T02:13:55.301Z",
        "score": "1172720835579056128",
        "ref_id": "2023-11-11T02:13:52.729Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "28d223580f5b769549e67d7a920941dd",
                "name": "video.mp4",
                "url": "https://cache.giaohangtietkiem.vn/d/28d223580f5b769549e67d7a920941dd.mp4",
                "ext": "mp4",
                "mime": "video/mp4",
                "mine": "video/mp4",
                "thumbnail": "https://cache.giaohangtietkiem.vn/d/28d223580f5b769549e67d7a920941dd.mp4?extract=thumb",
                "size": 8610440,
                "height": 1280,
                "width": 720,
                "duration": 32
            }
        ],
        "sender": {
            "id": "2404587982325694757",
            "user_key": "user_702746",
            "user_type": "user",
            "user_id": "702746",
            "username": "hieuvv54",
            "fullname": "Vương Văn Hiếu",
            "avatar": "https://cache.giaohangtietkiem.vn/d/b360eb86841b1ed42fe89789c315d67f.jpg",
            "status_id": 3
        }
    },
    {
        "id": "1172719529569218560",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "dạ màn tính lương của cod j",
        "status": 1,
        "created_at": "2023-11-11T02:08:43.924Z",
        "score": "1172719529569218560",
        "ref_id": "2023-11-11T02:08:44.080Z",
        "is_pin": 0,
        "sender": {
            "id": "7297790238907174526",
            "user_key": "user_689557",
            "user_type": "user",
            "user_id": "689557",
            "username": "linhnn81",
            "fullname": "Nguyễn Ngọc Linh",
            "avatar": "https://cache.giaohangtietkiem.vn/d/53964d9bf08e620f7adda1ac8da92d00.png",
            "status_id": 3
        },
        "quote_message": {
            "id": "1172502269223305216",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "màn nào  b  nhỉ",
            "status": 1,
            "created_at": "2023-11-10T11:45:25.021Z",
            "score": "7475488717099309294",
            "ref_id": "2023-11-10T11:45:18.563Z",
            "is_pin": 0,
            "sender": {
                "id": "242885275398654889",
                "user_key": "user_283731",
                "user_type": "user",
                "user_id": "283731",
                "username": "liemnt19",
                "fullname": "Nguyễn Thị Liêm",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1172702226085552128",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "B báo hr tắt config ép liên kết ví để thao tác làm hàng trước rồi sau đó bật lại để liên kết ví sau nhé",
        "status": 1,
        "created_at": "2023-11-11T00:59:58.452Z",
        "score": "1172702226085552128",
        "ref_id": "2023-11-11T00:59:58.279Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        },
        "reactions": [
            {
                "id": 1,
                "name": "LOVE",
                "count": 1,
                "me": false,
                "score": 1172706693740740608
            }
        ],
        "quote_message": {
            "id": "1172699029468004352",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "<@all>  check giùm mình case này với ạ, user khahv6 bạn bị như clip không check in và vào màn làm việc được. Đã đổi điện thoại và update app",
            "status": 1,
            "created_at": "2023-11-11T00:47:16.319Z",
            "score": "2553995419012797106",
            "ref_id": "2023-11-11T00:47:17.036Z",
            "is_pin": 0,
            "sender": {
                "id": "7622293753834869505",
                "user_key": "user_702377",
                "user_type": "user",
                "user_id": "702377",
                "username": "datnh82",
                "fullname": "Nguyễn Hoàng Đạt",
                "avatar": "https://cache.giaohangtietkiem.vn/d/80b2a4c639990eebe00e45464f33d67e.jpeg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1172700653737635840",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@242885275398654889> <@8881073744008496653> các chị kiểm tra giúp",
        "status": 1,
        "created_at": "2023-11-11T00:53:43.575Z",
        "score": "1172700653737635840",
        "ref_id": "2023-11-11T00:53:42.968Z",
        "is_pin": 0,
        "sender": {
            "id": "33711154678247180",
            "user_key": "user_664070",
            "user_type": "user",
            "user_id": "664070",
            "username": "phongph44",
            "fullname": "Phạm Hữu Phòng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/1e2457d6addc40bcaf3d0c8549788792.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "242885275398654889",
                "user_key": "user_283731",
                "user_type": "user",
                "user_id": "283731",
                "username": "liemnt19",
                "fullname": "Nguyễn Thị Liêm",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                "status_id": 3
            },
            {
                "id": "8881073744008496653",
                "user_key": "user_299168",
                "user_type": "user",
                "user_id": "299168",
                "username": "huongntt29",
                "fullname": "Nguyễn Thị Thu Hương",
                "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
                "status_id": 3
            }
        ],
        "quote_message": {
            "id": "1172699029468004352",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "<@all>  check giùm mình case này với ạ, user khahv6 bạn bị như clip không check in và vào màn làm việc được. Đã đổi điện thoại và update app",
            "status": 1,
            "created_at": "2023-11-11T00:47:16.319Z",
            "score": "8435194006118701600",
            "ref_id": "2023-11-11T00:47:17.036Z",
            "is_pin": 0,
            "sender": {
                "id": "7622293753834869505",
                "user_key": "user_702377",
                "user_type": "user",
                "user_id": "702377",
                "username": "datnh82",
                "fullname": "Nguyễn Hoàng Đạt",
                "avatar": "https://cache.giaohangtietkiem.vn/d/80b2a4c639990eebe00e45464f33d67e.jpeg",
                "status_id": 3
            }
        }
    },
    {
        "id": "1172699050460598272",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-11T00:47:21.324Z",
        "score": "1172699050460598272",
        "ref_id": "2023-11-11T00:45:48.275Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "7f0bc81752dece3732b8096d81ceb64a",
                "name": "screen-20231111-074310.mp4",
                "url": "https://cache.giaohangtietkiem.vn/d/7f0bc81752dece3732b8096d81ceb64a.mp4",
                "ext": "mp4",
                "mime": "video/mp4",
                "mine": "video/mp4",
                "thumbnail": "https://cache.giaohangtietkiem.vn/d/7f0bc81752dece3732b8096d81ceb64a.mp4?extract=thumb",
                "size": 144597927,
                "height": 3040,
                "width": 1440,
                "duration": 22
            }
        ],
        "sender": {
            "id": "7622293753834869505",
            "user_key": "user_702377",
            "user_type": "user",
            "user_id": "702377",
            "username": "datnh82",
            "fullname": "Nguyễn Hoàng Đạt",
            "avatar": "https://cache.giaohangtietkiem.vn/d/80b2a4c639990eebe00e45464f33d67e.jpeg",
            "status_id": 3
        }
    },
    {
        "id": "1172699029468004352",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@all>  check giùm mình case này với ạ, user khahv6 bạn bị như clip không check in và vào màn làm việc được. Đã đổi điện thoại và update app",
        "status": 1,
        "created_at": "2023-11-11T00:47:16.319Z",
        "score": "1172699029468004352",
        "ref_id": "2023-11-11T00:47:17.036Z",
        "is_pin": 0,
        "sender": {
            "id": "7622293753834869505",
            "user_key": "user_702377",
            "user_type": "user",
            "user_id": "702377",
            "username": "datnh82",
            "fullname": "Nguyễn Hoàng Đạt",
            "avatar": "https://cache.giaohangtietkiem.vn/d/80b2a4c639990eebe00e45464f33d67e.jpeg",
            "status_id": 3
        }
    },
    {
        "id": "1172698877508464640",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-11T00:46:40.089Z",
        "score": "1172698877508464640",
        "ref_id": "2023-11-11T00:45:02.501Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "7f0bc81752dece3732b8096d81ceb64a",
                "name": "screen-20231111-074310.mp4",
                "url": "https://cache.giaohangtietkiem.vn/d/7f0bc81752dece3732b8096d81ceb64a.mp4",
                "ext": "mp4",
                "mime": "video/mp4",
                "mine": "video/mp4",
                "thumbnail": "https://cache.giaohangtietkiem.vn/d/7f0bc81752dece3732b8096d81ceb64a.mp4?extract=thumb",
                "size": 144597927,
                "height": 3040,
                "width": 1440,
                "duration": 22
            }
        ],
        "sender": {
            "id": "7622293753834869505",
            "user_key": "user_702377",
            "user_type": "user",
            "user_id": "702377",
            "username": "datnh82",
            "fullname": "Nguyễn Hoàng Đạt",
            "avatar": "https://cache.giaohangtietkiem.vn/d/80b2a4c639990eebe00e45464f33d67e.jpeg",
            "status_id": 3
        }
    },
    {
        "id": "1172682267360043008",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "e báo thiếu cho tài chốt điểm trước, ac check lại lỗi này giúp e bị gì nha ạ",
        "status": 1,
        "created_at": "2023-11-10T23:40:39.921Z",
        "score": "1172682267360043008",
        "ref_id": "2023-11-10T23:40:39.207Z",
        "is_pin": 0,
        "sender": {
            "id": "7382340544646229776",
            "user_key": "user_684519",
            "user_type": "user",
            "user_id": "684519",
            "username": "hoangbn7",
            "fullname": "Bùi Ngọc Hoàng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/51005be585974abd8eadc21f6d1da81e.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        },
        "quote_message": {
            "id": "1172679373113995264",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "1292840477 ; 1249834236\nĐơn xuất giao cho tài không được, nhờ IT hỗ trợ giúp e với ạ, tk huynt127 ạ @Tất cả",
            "status": 1,
            "created_at": "2023-11-10T23:29:09.879Z",
            "score": "8988678169373074347",
            "updated_at": "2023-11-10T23:29:55.380Z",
            "ref_id": "2023-11-10T23:29:09.196Z",
            "is_pin": 0,
            "sender": {
                "id": "7382340544646229776",
                "user_key": "user_684519",
                "user_type": "user",
                "user_id": "684519",
                "username": "hoangbn7",
                "fullname": "Bùi Ngọc Hoàng",
                "avatar": "https://cache.giaohangtietkiem.vn/d/51005be585974abd8eadc21f6d1da81e.jpg",
                "status_id": 3,
                "properties": [
                    {
                        "size": "big",
                        "type": "THA_TIM",
                        "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                        "name": "Thả tim"
                    }
                ]
            }
        }
    },
    {
        "id": "1172679558473158656",
        "msg_type": "quote_message",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "<@242885275398654889> <@8881073744008496653>",
        "status": 1,
        "created_at": "2023-11-10T23:29:54.072Z",
        "score": "1172679558473158656",
        "ref_id": "2023-11-10T23:29:53.614Z",
        "is_pin": 0,
        "sender": {
            "id": "7607345989390541798",
            "user_key": "user_712818",
            "user_type": "user",
            "user_id": "712818",
            "username": "quangth20",
            "fullname": "Tân Hồng Quang",
            "avatar": "https://cache.giaohangtietkiem.vn/d/1eee444620479536715db49ae2d17bcc.jpg",
            "status_id": 3
        },
        "mentions": [
            {
                "id": "242885275398654889",
                "user_key": "user_283731",
                "user_type": "user",
                "user_id": "283731",
                "username": "liemnt19",
                "fullname": "Nguyễn Thị Liêm",
                "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
                "status_id": 3
            },
            {
                "id": "8881073744008496653",
                "user_key": "user_299168",
                "user_type": "user",
                "user_id": "299168",
                "username": "huongntt29",
                "fullname": "Nguyễn Thị Thu Hương",
                "avatar": "https://cache.giaohangtietkiem.vn/d/31e63254d210464a90170ca8d7e82685.jpg",
                "status_id": 3
            }
        ],
        "quote_message": {
            "id": "1172679373113995264",
            "msg_type": "text",
            "channel_id": "1748498667962360575",
            "channel_mode": "internal",
            "channel_type": "group",
            "text": "1292840477 ; 1249834236\nĐơn xuất giao cho tài không được, nhờ IT hỗ trợ giúp e với ạ <@all>",
            "status": 1,
            "created_at": "2023-11-10T23:29:09.879Z",
            "score": "8318016110999716134",
            "ref_id": "2023-11-10T23:29:09.196Z",
            "is_pin": 0,
            "sender": {
                "id": "7382340544646229776",
                "user_key": "user_684519",
                "user_type": "user",
                "user_id": "684519",
                "username": "hoangbn7",
                "fullname": "Bùi Ngọc Hoàng",
                "avatar": "https://cache.giaohangtietkiem.vn/d/51005be585974abd8eadc21f6d1da81e.jpg",
                "status_id": 3,
                "properties": [
                    {
                        "size": "big",
                        "type": "THA_TIM",
                        "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                        "name": "Thả tim"
                    }
                ]
            }
        }
    },
    {
        "id": "1172679373113995264",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "1292840477 ; 1249834236\nĐơn xuất giao cho tài không được, nhờ IT hỗ trợ giúp e với ạ, tk huynt127 ạ @Tất cả",
        "status": 1,
        "created_at": "2023-11-10T23:29:09.879Z",
        "score": "1172679373113995264",
        "updated_at": "2023-11-10T23:29:55.380Z",
        "ref_id": "2023-11-10T23:29:09.196Z",
        "is_pin": 0,
        "sender": {
            "id": "7382340544646229776",
            "user_key": "user_684519",
            "user_type": "user",
            "user_id": "684519",
            "username": "hoangbn7",
            "fullname": "Bùi Ngọc Hoàng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/51005be585974abd8eadc21f6d1da81e.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1172679275386916864",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "status": 1,
        "created_at": "2023-11-10T23:28:46.579Z",
        "score": "1172679275386916864",
        "ref_id": "2023-11-10T23:28:45.778Z",
        "is_pin": 0,
        "attachments": [
            {
                "id": "d9145114d5a094ec476866f62eca267e",
                "name": "anh0.jpg",
                "url": "https://cache.giaohangtietkiem.vn/d/d9145114d5a094ec476866f62eca267e.jpg",
                "ext": "jpg",
                "mime": "image/jpeg",
                "mine": "image/jpeg",
                "size": 456435,
                "height": 2048,
                "width": 946
            }
        ],
        "sender": {
            "id": "7382340544646229776",
            "user_key": "user_684519",
            "user_type": "user",
            "user_id": "684519",
            "username": "hoangbn7",
            "fullname": "Bùi Ngọc Hoàng",
            "avatar": "https://cache.giaohangtietkiem.vn/d/51005be585974abd8eadc21f6d1da81e.jpg",
            "status_id": 3,
            "properties": [
                {
                    "size": "big",
                    "type": "THA_TIM",
                    "icon": "https://cache.giaohangtietkiem.vn/image/show/b9167054-27e7-49d4-a598-7e6ab8f41bfc/0ee6822c-6287-4a5c-9e7d-55e85fcd0271.png",
                    "name": "Thả tim"
                }
            ]
        }
    },
    {
        "id": "1172514197136031744",
        "msg_type": "text",
        "channel_id": "1748498667962360575",
        "channel_mode": "internal",
        "channel_type": "group",
        "text": "Thao tác lại trạng thái đh đã lấy hàng đã nhập lại lần nữa đó b.",
        "status": 1,
        "created_at": "2023-11-10T12:32:48.857Z",
        "score": "1172514197136031744",
        "ref_id": "2023-11-10T12:32:46.740Z",
        "is_pin": 0,
        "sender": {
            "id": "242885275398654889",
            "user_key": "user_283731",
            "user_type": "user",
            "user_id": "283731",
            "username": "liemnt19",
            "fullname": "Nguyễn Thị Liêm",
            "avatar": "https://cache.giaohangtietkiem.vn/d/0d1019f5cd294647927aac0a6a74efef.jpg",
            "status_id": 3
        }
    }
];
console.log(data);
  var index = 1
  var lng = "";
  data.forEach(a=>{
    if(a.text){
      index = index + 1;
      lng = lng + a.text;
    }
  })
console.log(index)
console.log(lng.length)
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/l9.jpg",
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Thuy Duong",
      onOpen: function () {
        var audplay = new Audio("sound/m.mp3")
        audplay.play();
    }
    }).then(function () {
      $(".content").show(200);
    });
  }
  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Nhập!!!'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "./icrushu.html";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
