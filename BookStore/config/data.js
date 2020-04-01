// 底部数据
export const TabBarList = {
    tabBar: [
        {
            name: "职位",
            icon: 'home-o',
            id: 1,
            path: '/home/content'
        },
        {
            name: '公司',
            icon: 'apps-o',
            id: 2,
            path: '/home/componey'
        },
        {
            name: '消息',
            icon: 'chat-o',
            id: 3,
            path: '/home/message'
        },
        {
            name: '我的',
            icon: 'user-o',
            id: 4,
            path: '/home/own'
        }
    ]
}
//#endregion
export const jobList = [
    {
        id: '100',
        title: 'web前端',
        company: '阿里巴巴',
        status: 'B轮',
        address: '杭州',
        year: '1-3年',
        generated: '本科',
        slary: '10-11K',
        person: {
            img: '',
            peronName: '小明',
            job: '招聘经理'
        }
    },
    {
        id: '101',
        title: 'web前端',
        company: '百度',
        status: 'C轮',
        address: '上海',
        year: '1-3年',
        generated: '本科',
        slary: '12-16K',
        person: {
            img: '',
            peronName: '小张',
            job: '招聘主管'
        }
    },
    {
        id: '103',
        title: '前端前端',
        company: '华为',
        status: 'C轮',
        address: '深圳',
        year: '3-5年',
        generated: '本科',
        slary: '20-30K',
        person: {
            img: '',
            peronName: '小丽',
            job: '招聘经理'
        }
    },
    {
        id: '104',
        title: '前端前端',
        company: '华为',
        status: 'C轮',
        address: '深圳',
        year: '3-5年',
        generated: '本科',
        slary: '20-35K',
        person: {
            img: '',
            peronName: '小丽',
            job: '招聘经理'
        }
    },
    {
        id: '105',
        title: '前端前端',
        company: '网易',
        status: 'C轮',
        address: '上海',
        year: '3-5年',
        generated: '研究生',
        slary: '15-30K',
        person: {
            img: '',
            peronName: '小刚',
            job: '招聘专员'
        }
    },
    {
        id: '106',
        title: '前端前端',
        company: '今日头条',
        status: 'C轮',
        address: '上海',
        year: '3-5年',
        generated: '本科',
        slary: '18-30K',
        person: {
            img: '',
            peronName: '小美',
            job: '招聘专员'
        }
    }
]


export const ComponeyList = [
    {
        name: '科大讯飞',
        address: '合肥市 蜀山区 高新区',
        status: '已上市',
        number: '10000人以上',
        type: '移动互联网',
        typejobNumber: '1717',
        img: ''
    },
    {
        name: '阿里巴巴',
        address: '杭州市',
        status: '已上市',
        number: '10000人以上',
        type: '电子商务',
        typejobNumber: '300',
        img: ''
    },
    {
        name: '百得思维',
        address: '合肥市 蜀山区 高新区',
        status: '已上市',
        number: '10000人以上',
        type: '计算机软件',
        typejobNumber: '400',
        img: ''
    },
    {
        name: '上海掌易',
        address: '上海市 浦东新区 张江',
        status: 'B轮',
        number: '20-99人',
        type: '游戏',
        typejobNumber: '57',
        img: ''
    }
]
export const MessageList = [
    {
        id: 1,
        img: '',
        person: '朱女士',
        componey: '柯蓝科技',
        job: '前端Leader',
        message: '你好，我对你很感兴趣',
        isReading: false,
        date: '3月14日'
    },
    {
        id: 2,
        img: '',
        person: '王先生',
        componey: '阿里巴巴',
        job: '招聘主管',
        message: '你好我是阿里巴巴人事',
        isReading: true,
        date: '3月12日'
    },
    {
        id: 3,
        img: '',
        person: '张经理',
        componey: '华为科技',
        job: '招聘经理',
        message: '你好，我对你很感兴趣',
        isReading: true,
        date: '3月12日'
    },
    {
        id: 4,
        img: '',
        person: '李女士',
        componey: '百度科技',
        job: '前端Leader',
        message: '你好，我对你很感兴趣',
        isReading: false,
        date: '3月11日'
    },
    {
        id: 5,
        img: '',
        person: '张女士',
        componey: '乐章科技',
        job: '招聘总监',
        message: '你好，我对你很感兴趣',
        isReading: false,
        date: '3月11日'
    }
]

export const MessagStauts = ["全部", "已读", "未读"]