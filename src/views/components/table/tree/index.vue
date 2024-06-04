<script setup lang="tsx" name="treeProTable">
import { reactive, ref } from 'vue'
import { CirclePlus, Delete, EditPen, View } from '@element-plus/icons-vue'
import ZyTable from '@/components/ZyTable/index.vue'
import TreeFilter from '@/components/TreeFilter/index.vue'
import type { ColumnProps, ZyTableInstance } from '@/components/ZyTable/interface'

const zyTable = ref<ZyTableInstance | null>(null)

const treeFilterData = ref<any[]>([
  {
    id: '1',
    name: '华东分部',
    children: [
      {
        id: '11',
        name: '研发部',
      },
      {
        id: '12',
        name: '市场部',
      },
      {
        id: '13',
        name: '商务部',
      },
      {
        id: '14',
        name: '财务部',
      },
    ],
  },
  {
    id: '2',
    name: '华南分部',
    children: [
      {
        id: '21',
        name: '研发部',
      },
      {
        id: '22',
        name: '市场部',
      },
      {
        id: '23',
        name: '商务部',
      },
      {
        id: '24',
        name: '财务部',
      },
    ],
  },
  {
    id: '3',
    name: '西北分部',
    children: [
      {
        id: '31',
        name: '研发部',
      },
      {
        id: '32',
        name: '市场部',
      },
      {
        id: '33',
        name: '商务部',
      },
      {
        id: '34',
        name: '财务部',
      },
    ],
  },
])

// 树形筛选切换
function changeTreeFilter(val: string) {
  ElMessage.success(`请注意查看请求参数变化 🤔, ${val}`)
  zyTable.value!.pageable.pageNum = 1
}

const tableData = ref<any>([
  {
    id: '856461276655059593',
    username: '薛娟',
    gender: 1,
    user: {
      detail: {
        age: 11,
      },
    },
    idCard: '856461276655059593',
    email: 's.xijmwsqmg@eticzo.ne',
    address: '上海 上海市',
    createTime: '1990-06-09 13:01:07',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '565764811746182857',
        username: '丁娜',
        gender: 2,
        user: {
          detail: {
            age: 25,
          },
        },
        idCard: '565764811746182857',
        email: 'p.wtxslusm@xjyqfs.fi',
        address: '贵州省 黔南布依族苗族自治州',
        createTime: '1993-03-30 22:39:37',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '203177688685267392',
        username: '万艳',
        gender: 1,
        user: {
          detail: {
            age: 24,
          },
        },
        idCard: '203177688685267392',
        email: 'o.qnsdn@flhkh.ki',
        address: '湖南省 怀化市',
        createTime: '1981-02-27 06:07:13',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '436418254158627583',
        username: '杨刚',
        gender: 2,
        user: {
          detail: {
            age: 12,
          },
        },
        idCard: '436418254158627583',
        email: 'k.nmfsiifgk@ccljn.ml',
        address: '宁夏回族自治区 中卫市',
        createTime: '1976-10-22 02:46:03',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
    ],
  },
  {
    id: '233436488616301750',
    username: '卢明',
    gender: 2,
    user: {
      detail: {
        age: 28,
      },
    },
    idCard: '233436488616301750',
    email: 's.wuy@pjtz.de',
    address: '河南省 郑州市',
    createTime: '2017-12-12 05:25:24',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '777878672614423756',
        username: '熊洋',
        gender: 1,
        user: {
          detail: {
            age: 26,
          },
        },
        idCard: '777878672614423756',
        email: 'h.wfmjum@ljh.za',
        address: '广东省 揭阳市',
        createTime: '1993-12-02 08:08:58',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '778125303125686459',
        username: '黎磊',
        gender: 1,
        user: {
          detail: {
            age: 11,
          },
        },
        idCard: '778125303125686459',
        email: 'z.ryhmctf@uqbkpbif.pw',
        address: '江西省 萍乡市',
        createTime: '1994-07-15 20:04:27',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '137481949840194832',
        username: '邓静',
        gender: 1,
        user: {
          detail: {
            age: 13,
          },
        },
        idCard: '137481949840194832',
        email: 'x.qqyti@qjgqb.sd',
        address: '台湾 台东县',
        createTime: '1984-07-20 17:38:53',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '687467669620225452',
    username: '锺刚',
    gender: 1,
    user: {
      detail: {
        age: 26,
      },
    },
    idCard: '687467669620225452',
    email: 'b.mvjfv@fneejpnk.iq',
    address: '安徽省 合肥市',
    createTime: '2002-10-19 22:41:53',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '516538893698817336',
        username: '黎军',
        gender: 1,
        user: {
          detail: {
            age: 14,
          },
        },
        idCard: '516538893698817336',
        email: 'u.yxxslulakn@lhlfm.al',
        address: '辽宁省 大连市',
        createTime: '2019-08-01 10:43:42',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '642613837252883417',
        username: '金军',
        gender: 2,
        user: {
          detail: {
            age: 10,
          },
        },
        idCard: '642613837252883417',
        email: 't.rneogsiow@snybwej.tr',
        address: '吉林省 吉林市',
        createTime: '1975-08-21 16:00:57',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '543172621348841815',
        username: '乔明',
        gender: 1,
        user: {
          detail: {
            age: 15,
          },
        },
        idCard: '543172621348841815',
        email: 's.qokpbueplu@oiort.ci',
        address: '辽宁省 大连市',
        createTime: '1983-08-23 10:55:01',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '785751323352736561',
    username: '段涛',
    gender: 1,
    user: {
      detail: {
        age: 24,
      },
    },
    idCard: '785751323352736561',
    email: 'a.brpejyyb@krebyj.mg',
    address: '河北省 保定市',
    createTime: '1991-11-25 03:47:41',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '325305544666145756',
        username: '何艳',
        gender: 1,
        user: {
          detail: {
            age: 22,
          },
        },
        idCard: '325305544666145756',
        email: 'n.hpbxhxk@cmmgppb.sk',
        address: '浙江省 绍兴市',
        createTime: '1999-10-28 00:43:38',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '342171692441475782',
        username: '戴军',
        gender: 1,
        user: {
          detail: {
            age: 13,
          },
        },
        idCard: '342171692441475782',
        email: 'b.qsfxwwk@uneyu.nu',
        address: '内蒙古自治区 呼和浩特市',
        createTime: '1990-06-05 14:14:58',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '741948156272784466',
        username: '姜强',
        gender: 1,
        user: {
          detail: {
            age: 22,
          },
        },
        idCard: '741948156272784466',
        email: 'c.qdycqjpiv@kgf.net',
        address: '澳门特别行政区 离岛',
        createTime: '1982-10-07 14:22:09',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '513446471487853057',
    username: '锺秀英',
    gender: 1,
    user: {
      detail: {
        age: 26,
      },
    },
    idCard: '513446471487853057',
    email: 'u.ffwda@yql.tp',
    address: '贵州省 黔南布依族苗族自治州',
    createTime: '2016-05-19 22:24:25',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '446641918179268252',
        username: '夏娜',
        gender: 1,
        user: {
          detail: {
            age: 15,
          },
        },
        idCard: '446641918179268252',
        email: 'e.fgnnkb@jblbmf.pm',
        address: '海南省 三亚市',
        createTime: '1979-03-30 20:25:20',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '311294940271882453',
        username: '许杰',
        gender: 2,
        user: {
          detail: {
            age: 19,
          },
        },
        idCard: '311294940271882453',
        email: 'n.mnpbcwrnul@owbvvfi.name',
        address: '广东省 茂名市',
        createTime: '1972-04-22 02:05:37',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '137862161686643815',
        username: '任洋',
        gender: 1,
        user: {
          detail: {
            age: 27,
          },
        },
        idCard: '137862161686643815',
        email: 'g.dbdsf@edsiyv.ai',
        address: '北京 北京市',
        createTime: '1998-07-07 02:50:36',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '485505469111778510',
    username: '魏勇',
    gender: 2,
    user: {
      detail: {
        age: 21,
      },
    },
    idCard: '485505469111778510',
    email: 'l.ksmo@rpchqsdrep.bz',
    address: '安徽省 安庆市',
    createTime: '1980-04-29 01:10:58',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '682673824415366960',
        username: '于军',
        gender: 2,
        user: {
          detail: {
            age: 20,
          },
        },
        idCard: '682673824415366960',
        email: 'k.pouyaminw@kjzkdykq.kg',
        address: '台湾 南投县',
        createTime: '2004-08-11 05:08:15',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '240322122825125378',
        username: '吴涛',
        gender: 1,
        user: {
          detail: {
            age: 26,
          },
        },
        idCard: '240322122825125378',
        email: 'p.juqxkvd@ybnj.nu',
        address: '西藏自治区 阿里地区',
        createTime: '1979-07-04 17:34:42',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '232576518653152295',
        username: '萧丽',
        gender: 2,
        user: {
          detail: {
            age: 12,
          },
        },
        idCard: '232576518653152295',
        email: 'y.ujbbn@utedehsh.do',
        address: '四川省 雅安市',
        createTime: '2010-10-28 09:07:14',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '249489875967426266',
    username: '高军',
    gender: 2,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '249489875967426266',
    email: 'n.tgixukxdyp@geqzo.tv',
    address: '宁夏回族自治区 石嘴山市',
    createTime: '1984-04-05 06:15:32',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
    children: [
      {
        id: '233374197638699830',
        username: '赖磊',
        gender: 1,
        user: {
          detail: {
            age: 27,
          },
        },
        idCard: '233374197638699830',
        email: 'y.tgppn@pvoinuxyp.gov.cn',
        address: '海南省 海口市',
        createTime: '1985-05-04 03:10:14',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '919236631716241858',
        username: '魏芳',
        gender: 1,
        user: {
          detail: {
            age: 27,
          },
        },
        idCard: '919236631716241858',
        email: 'w.puqj@kuimwiy.lc',
        address: '四川省 甘孜藏族自治州',
        createTime: '2013-01-23 17:44:12',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '334606557850542331',
        username: '汤洋',
        gender: 2,
        user: {
          detail: {
            age: 27,
          },
        },
        idCard: '334606557850542331',
        email: 'x.rilgcr@iym.ci',
        address: '吉林省 白山市',
        createTime: '1970-10-27 16:33:33',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '175886814571310243',
    username: '蔡娜',
    gender: 2,
    user: {
      detail: {
        age: 13,
      },
    },
    idCard: '175886814571310243',
    email: 'm.ctykkuqwu@xsng.中国',
    address: '香港特别行政区 新界',
    createTime: '2013-08-07 10:32:20',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '287268269870115766',
        username: '邱秀英',
        gender: 2,
        user: {
          detail: {
            age: 12,
          },
        },
        idCard: '287268269870115766',
        email: 'e.wccud@dgjpd.ls',
        address: '贵州省 黔东南苗族侗族自治州',
        createTime: '1987-11-18 11:50:42',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '204611480334845019',
        username: '刘敏',
        gender: 2,
        user: {
          detail: {
            age: 17,
          },
        },
        idCard: '204611480334845019',
        email: 'm.ondwwvury@egwy.an',
        address: '黑龙江省 牡丹江市',
        createTime: '2011-09-19 17:58:39',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '553456763240081167',
        username: '邹磊',
        gender: 1,
        user: {
          detail: {
            age: 25,
          },
        },
        idCard: '553456763240081167',
        email: 'e.autcbm@tdloloide.nc',
        address: '山西省 阳泉市',
        createTime: '1985-04-10 22:05:22',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '382846846562799687',
    username: '阎超',
    gender: 2,
    user: {
      detail: {
        age: 26,
      },
    },
    idCard: '382846846562799687',
    email: 'w.xsptbuip@ersvqrcdko.bs',
    address: '广西壮族自治区 玉林市',
    createTime: '2023-04-24 10:43:31',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '246568721072112757',
        username: '阎杰',
        gender: 2,
        user: {
          detail: {
            age: 12,
          },
        },
        idCard: '246568721072112757',
        email: 'l.fvhaiy@xqtonok.ng',
        address: '江苏省 苏州市',
        createTime: '1987-06-11 15:00:56',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '727964553588445736',
        username: '秦明',
        gender: 1,
        user: {
          detail: {
            age: 27,
          },
        },
        idCard: '727964553588445736',
        email: 'b.dgofwisudn@gird.pg',
        address: '四川省 雅安市',
        createTime: '1999-11-02 02:21:45',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '512115856993517573',
        username: '潘洋',
        gender: 2,
        user: {
          detail: {
            age: 15,
          },
        },
        idCard: '512115856993517573',
        email: 'i.guxcgyvhm@zfqcybw.cn',
        address: '江苏省 南通市',
        createTime: '1985-04-05 09:03:48',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
    ],
  },
  {
    id: '157645163811399606',
    username: '胡磊',
    gender: 1,
    user: {
      detail: {
        age: 15,
      },
    },
    idCard: '157645163811399606',
    email: 'e.xjbywju@oaxhqk.rw',
    address: '西藏自治区 昌都地区',
    createTime: '1975-05-12 09:53:20',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '139329758538621406',
        username: '邱娜',
        gender: 1,
        user: {
          detail: {
            age: 23,
          },
        },
        idCard: '139329758538621406',
        email: 'm.sdsmvim@rsrhxu.sc',
        address: '吉林省 白城市',
        createTime: '2012-07-22 01:04:00',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '553343131365858765',
        username: '邓刚',
        gender: 1,
        user: {
          detail: {
            age: 13,
          },
        },
        idCard: '553343131365858765',
        email: 'x.pslu@vriufh.net.cn',
        address: '香港特别行政区 九龙',
        createTime: '2015-09-18 00:24:38',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '448174662367553504',
        username: '顾霞',
        gender: 1,
        user: {
          detail: {
            age: 15,
          },
        },
        idCard: '448174662367553504',
        email: 'o.emkhblyid@cuxw.vu',
        address: '湖北省 黄石市',
        createTime: '2003-07-01 16:13:18',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '507106846323858479',
    username: '冯秀英',
    gender: 1,
    user: {
      detail: {
        age: 19,
      },
    },
    idCard: '507106846323858479',
    email: 'z.qesjqvijnp@nggel.tv',
    address: '新疆维吾尔自治区 塔城地区',
    createTime: '1995-08-10 23:54:12',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '613496678013827761',
        username: '金秀兰',
        gender: 2,
        user: {
          detail: {
            age: 13,
          },
        },
        idCard: '613496678013827761',
        email: 'b.ouwquz@kssuymd.rw',
        address: '河北省 唐山市',
        createTime: '2003-10-20 19:26:45',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '467681387184977538',
        username: '曾刚',
        gender: 2,
        user: {
          detail: {
            age: 16,
          },
        },
        idCard: '467681387184977538',
        email: 'p.iucxfv@rxxp.pt',
        address: '重庆 重庆市',
        createTime: '2010-07-04 11:32:46',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '426615465056276481',
        username: '雷杰',
        gender: 2,
        user: {
          detail: {
            age: 30,
          },
        },
        idCard: '426615465056276481',
        email: 'm.efurptzx@xbrg.tr',
        address: '海外 海外',
        createTime: '2010-04-06 21:07:34',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '314366843320714629',
    username: '胡敏',
    gender: 2,
    user: {
      detail: {
        age: 23,
      },
    },
    idCard: '314366843320714629',
    email: 'a.zuxkevl@doukpsf.ma',
    address: '天津 天津市',
    createTime: '1990-08-09 00:55:41',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '207521946382506913',
        username: '史明',
        gender: 2,
        user: {
          detail: {
            age: 30,
          },
        },
        idCard: '207521946382506913',
        email: 'c.bysf@obisyplxqe.ao',
        address: '福建省 南平市',
        createTime: '2024-02-28 17:52:03',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '087744166712444791',
        username: '田娜',
        gender: 1,
        user: {
          detail: {
            age: 21,
          },
        },
        idCard: '087744166712444791',
        email: 'p.gqppwcmxr@aoxtssxmu.et',
        address: '广西壮族自治区 南宁市',
        createTime: '2001-10-24 07:03:18',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '774452568348445326',
        username: '朱刚',
        gender: 2,
        user: {
          detail: {
            age: 16,
          },
        },
        idCard: '774452568348445326',
        email: 'c.nsoxubqj@rwvicdmp.sm',
        address: '甘肃省 临夏回族自治州',
        createTime: '1973-08-27 12:30:50',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '878235814542146927',
    username: '谭丽',
    gender: 1,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '878235814542146927',
    email: 'm.lpsxkbsx@evxib.am',
    address: '青海省 果洛藏族自治州',
    createTime: '1996-03-12 16:58:34',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '417107303515113325',
        username: '锺洋',
        gender: 1,
        user: {
          detail: {
            age: 24,
          },
        },
        idCard: '417107303515113325',
        email: 'k.fafvpqoxys@eeldfbcoj.info',
        address: '云南省 楚雄彝族自治州',
        createTime: '2006-08-16 06:56:51',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '139817879763398572',
        username: '傅涛',
        gender: 2,
        user: {
          detail: {
            age: 11,
          },
        },
        idCard: '139817879763398572',
        email: 'm.csoeieqee@nghkrutj.tp',
        address: '湖北省 黄石市',
        createTime: '1982-10-28 15:43:43',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '314869220512936497',
        username: '段杰',
        gender: 2,
        user: {
          detail: {
            age: 26,
          },
        },
        idCard: '314869220512936497',
        email: 't.dxxxpunbb@hjxypslqb.tw',
        address: '新疆维吾尔自治区 喀什地区',
        createTime: '1998-02-14 16:25:59',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
    ],
  },
  {
    id: '918412868573273301',
    username: '陈敏',
    gender: 2,
    user: {
      detail: {
        age: 16,
      },
    },
    idCard: '918412868573273301',
    email: 'n.jcqam@xiulq.as',
    address: '福建省 龙岩市',
    createTime: '2011-06-23 05:56:11',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '365788248553387011',
        username: '赵勇',
        gender: 2,
        user: {
          detail: {
            age: 17,
          },
        },
        idCard: '365788248553387011',
        email: 'a.nzqynx@jzcshqpbms.ie',
        address: '甘肃省 天水市',
        createTime: '1986-03-22 23:56:56',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '118694751488738778',
        username: '于超',
        gender: 2,
        user: {
          detail: {
            age: 23,
          },
        },
        idCard: '118694751488738778',
        email: 'n.jiouzu@yhcdnxdou.asia',
        address: '甘肃省 金昌市',
        createTime: '2003-09-10 01:26:39',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '597664155486663160',
        username: '宋涛',
        gender: 2,
        user: {
          detail: {
            age: 16,
          },
        },
        idCard: '597664155486663160',
        email: 't.shyg@mpojdy.ug',
        address: '山西省 忻州市',
        createTime: '2021-12-21 05:13:40',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
    ],
  },
  {
    id: '189965468304144316',
    username: '尹静',
    gender: 2,
    user: {
      detail: {
        age: 15,
      },
    },
    idCard: '189965468304144316',
    email: 'i.ukvrogr@tgtyghcm.fj',
    address: '黑龙江省 齐齐哈尔市',
    createTime: '1986-01-12 02:35:25',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
    children: [
      {
        id: '009861435964932701',
        username: '张艳',
        gender: 1,
        user: {
          detail: {
            age: 17,
          },
        },
        idCard: '009861435964932701',
        email: 'z.goktgzlgy@fqis.fi',
        address: '甘肃省 定西市',
        createTime: '1976-01-10 23:20:05',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '878525446235251474',
        username: '汪明',
        gender: 2,
        user: {
          detail: {
            age: 25,
          },
        },
        idCard: '878525446235251474',
        email: 'g.fxng@xruaujvetn.pl',
        address: '宁夏回族自治区 固原市',
        createTime: '1970-06-21 04:08:25',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '035281145576104586',
        username: '邓芳',
        gender: 1,
        user: {
          detail: {
            age: 22,
          },
        },
        idCard: '035281145576104586',
        email: 'l.oytqsjtn@twkozj.si',
        address: '江苏省 盐城市',
        createTime: '1997-10-21 12:37:19',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '498363064468655656',
    username: '黄秀兰',
    gender: 2,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '498363064468655656',
    email: 'm.iwmvfjcq@lghlgojde.cf',
    address: '台湾 屏东县',
    createTime: '2011-05-14 01:37:58',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '347942744365667958',
        username: '邹丽',
        gender: 2,
        user: {
          detail: {
            age: 16,
          },
        },
        idCard: '347942744365667958',
        email: 'h.gyfmpz@blsdyi.tj',
        address: '海南省 三沙市',
        createTime: '1986-06-13 09:35:30',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '422208647847346936',
        username: '任杰',
        gender: 1,
        user: {
          detail: {
            age: 22,
          },
        },
        idCard: '422208647847346936',
        email: 'w.lxuibad@qrgdvbv.jp',
        address: '澳门特别行政区 澳门半岛',
        createTime: '1984-08-03 10:45:00',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '557131498343864561',
        username: '沈艳',
        gender: 2,
        user: {
          detail: {
            age: 24,
          },
        },
        idCard: '557131498343864561',
        email: 'f.ifb@fwocjgb.asia',
        address: '西藏自治区 山南地区',
        createTime: '1999-08-18 00:16:02',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '862448730143058231',
    username: '贾静',
    gender: 1,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '862448730143058231',
    email: 'd.uvcmmli@yhywnplti.tf',
    address: '广西壮族自治区 防城港市',
    createTime: '2005-10-21 19:55:15',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '796243335308886232',
        username: '赖强',
        gender: 2,
        user: {
          detail: {
            age: 13,
          },
        },
        idCard: '796243335308886232',
        email: 'l.gfzqu@cvtpus.ci',
        address: '黑龙江省 齐齐哈尔市',
        createTime: '2011-05-19 10:19:53',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '888640731995257517',
        username: '金洋',
        gender: 1,
        user: {
          detail: {
            age: 13,
          },
        },
        idCard: '888640731995257517',
        email: 'd.ghpkfurix@kdpdd.ws',
        address: '新疆维吾尔自治区 巴音郭楞蒙古自治州',
        createTime: '2005-11-08 16:36:48',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '586131448586163445',
        username: '彭丽',
        gender: 2,
        user: {
          detail: {
            age: 29,
          },
        },
        idCard: '586131448586163445',
        email: 'x.hkkwyfsxdi@wihbsh.gt',
        address: '青海省 海东市',
        createTime: '1992-10-25 15:58:28',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '748261567272322372',
    username: '周敏',
    gender: 1,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '748261567272322372',
    email: 'q.kphdio@cthsg.vu',
    address: '海外 海外',
    createTime: '2003-09-03 22:36:06',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
    children: [
      {
        id: '864011913448347383',
        username: '阎超',
        gender: 1,
        user: {
          detail: {
            age: 19,
          },
        },
        idCard: '864011913448347383',
        email: 'f.szdfwps@rdck.si',
        address: '宁夏回族自治区 中卫市',
        createTime: '1998-07-06 22:34:56',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '490885378761186721',
        username: '姜芳',
        gender: 2,
        user: {
          detail: {
            age: 26,
          },
        },
        idCard: '490885378761186721',
        email: 'p.sbp@pwhwyqgph.aero',
        address: '西藏自治区 昌都地区',
        createTime: '2000-06-01 19:16:37',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '343372992644373744',
        username: '谭平',
        gender: 1,
        user: {
          detail: {
            age: 28,
          },
        },
        idCard: '343372992644373744',
        email: 'm.gxenukr@rrfkyc.ch',
        address: '新疆维吾尔自治区 巴音郭楞蒙古自治州',
        createTime: '1978-02-17 14:38:06',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '139458609872675576',
    username: '段娜',
    gender: 1,
    user: {
      detail: {
        age: 10,
      },
    },
    idCard: '139458609872675576',
    email: 'm.lsox@afejkiime.zr',
    address: '宁夏回族自治区 银川市',
    createTime: '2011-10-02 07:20:30',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '856321175052482942',
        username: '胡涛',
        gender: 1,
        user: {
          detail: {
            age: 23,
          },
        },
        idCard: '856321175052482942',
        email: 'k.mvxbxskrf@cgcsrdqptr.jm',
        address: '山东省 滨州市',
        createTime: '2023-07-11 09:22:22',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '980338735534763557',
        username: '钱秀英',
        gender: 1,
        user: {
          detail: {
            age: 20,
          },
        },
        idCard: '980338735534763557',
        email: 'l.rxiihmoj@ihbt.ca',
        address: '湖南省 张家界市',
        createTime: '2014-11-11 18:28:04',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '228461851681538878',
        username: '董强',
        gender: 2,
        user: {
          detail: {
            age: 18,
          },
        },
        idCard: '228461851681538878',
        email: 'i.ywim@numudc.ph',
        address: '天津 天津市',
        createTime: '1980-11-24 03:53:36',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
    ],
  },
  {
    id: '344048828058883978',
    username: '戴秀兰',
    gender: 2,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '344048828058883978',
    email: 'v.ggj@trkzwcke.ae',
    address: '宁夏回族自治区 固原市',
    createTime: '1983-05-14 13:57:44',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '473672721091708601',
        username: '郑娜',
        gender: 1,
        user: {
          detail: {
            age: 20,
          },
        },
        idCard: '473672721091708601',
        email: 'i.xvnrdshfp@czjryc.gov',
        address: '河北省 沧州市',
        createTime: '1984-03-23 13:01:27',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '364557629821470776',
        username: '萧磊',
        gender: 1,
        user: {
          detail: {
            age: 25,
          },
        },
        idCard: '364557629821470776',
        email: 'b.drfvt@fcerncl.iq',
        address: '香港特别行政区 香港岛',
        createTime: '1972-05-13 22:26:14',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '464776354960951802',
        username: '万刚',
        gender: 2,
        user: {
          detail: {
            age: 14,
          },
        },
        idCard: '464776354960951802',
        email: 'g.ugru@yzsqklvmw.nc',
        address: '宁夏回族自治区 吴忠市',
        createTime: '1970-03-10 13:04:52',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
    ],
  },
  {
    id: '061767536130325528',
    username: '姚平',
    gender: 1,
    user: {
      detail: {
        age: 24,
      },
    },
    idCard: '061767536130325528',
    email: 'm.ishy@yvino.gy',
    address: '河南省 开封市',
    createTime: '1979-01-10 20:50:04',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
    children: [
      {
        id: '474461161364273587',
        username: '傅艳',
        gender: 2,
        user: {
          detail: {
            age: 26,
          },
        },
        idCard: '474461161364273587',
        email: 'l.riviodp@cytwrs.gh',
        address: '青海省 玉树藏族自治州',
        createTime: '2020-02-15 10:37:06',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '702154328136054254',
        username: '龙桂英',
        gender: 1,
        user: {
          detail: {
            age: 22,
          },
        },
        idCard: '702154328136054254',
        email: 'v.lviyyj@pftgdo.hm',
        address: '安徽省 阜阳市',
        createTime: '1977-10-11 10:37:18',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
      {
        id: '658547602336758850',
        username: '任霞',
        gender: 1,
        user: {
          detail: {
            age: 23,
          },
        },
        idCard: '658547602336758850',
        email: 'b.hlpamikg@nytaviqy.coop',
        address: '澳门特别行政区 离岛',
        createTime: '2014-04-17 03:30:15',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '456164577218174295',
    username: '于洋',
    gender: 1,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '456164577218174295',
    email: 't.asihhhtb@wgwhfytiae.pt',
    address: '黑龙江省 伊春市',
    createTime: '2009-01-30 14:18:58',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '896252611607587616',
        username: '何涛',
        gender: 1,
        user: {
          detail: {
            age: 14,
          },
        },
        idCard: '896252611607587616',
        email: 'k.hedzw@lfgovtn.bh',
        address: '河南省 新乡市',
        createTime: '2024-01-13 04:21:11',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '556330541852267472',
        username: '彭静',
        gender: 1,
        user: {
          detail: {
            age: 27,
          },
        },
        idCard: '556330541852267472',
        email: 'e.mwggaigco@qgcopoccl.kg',
        address: '四川省 德阳市',
        createTime: '2009-05-17 05:47:54',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '661570907852369483',
        username: '崔军',
        gender: 1,
        user: {
          detail: {
            age: 30,
          },
        },
        idCard: '661570907852369483',
        email: 'f.bbhqp@zsexpnr.ag',
        address: '云南省 德宏傣族景颇族自治州',
        createTime: '1995-11-23 08:15:52',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
    ],
  },
  {
    id: '120736814415626542',
    username: '江刚',
    gender: 2,
    user: {
      detail: {
        age: 19,
      },
    },
    idCard: '120736814415626542',
    email: 'w.rpsquhq@yzoryrk.ve',
    address: '台湾 苗栗县',
    createTime: '2004-11-05 11:28:51',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
    children: [
      {
        id: '658845573390270168',
        username: '侯明',
        gender: 2,
        user: {
          detail: {
            age: 24,
          },
        },
        idCard: '658845573390270168',
        email: 'n.dihjz@qfhcoost.gov',
        address: '湖北省 武汉市',
        createTime: '1970-12-21 23:10:09',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '963440422333832726',
        username: '丁敏',
        gender: 2,
        user: {
          detail: {
            age: 25,
          },
        },
        idCard: '963440422333832726',
        email: 'u.rwmrmd@zkckjg.hn',
        address: '香港特别行政区 香港岛',
        createTime: '2019-11-25 11:53:20',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '787765765782966442',
        username: '顾丽',
        gender: 2,
        user: {
          detail: {
            age: 26,
          },
        },
        idCard: '787765765782966442',
        email: 'j.vigtcs@bggwrunkj.kw',
        address: '辽宁省 营口市',
        createTime: '1991-03-04 22:11:18',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
    ],
  },
  {
    id: '158171591742265427',
    username: '孟超',
    gender: 1,
    user: {
      detail: {
        age: 24,
      },
    },
    idCard: '158171591742265427',
    email: 's.dbwkuvnhad@gjaqmrjsl.nc',
    address: '河北省 唐山市',
    createTime: '1977-12-22 17:37:03',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
    children: [
      {
        id: '302363632157828501',
        username: '孙芳',
        gender: 2,
        user: {
          detail: {
            age: 28,
          },
        },
        idCard: '302363632157828501',
        email: 'f.wgwpm@eohceno.td',
        address: '内蒙古自治区 巴彦淖尔市',
        createTime: '1980-09-03 16:51:18',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
      {
        id: '957535364622879191',
        username: '邱丽',
        gender: 2,
        user: {
          detail: {
            age: 18,
          },
        },
        idCard: '957535364622879191',
        email: 'v.kgdvcc@sdqvu.dm',
        address: '青海省 西宁市',
        createTime: '1990-04-20 17:58:15',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '310031707585458626',
        username: '顾平',
        gender: 2,
        user: {
          detail: {
            age: 15,
          },
        },
        idCard: '310031707585458626',
        email: 'o.mponetunn@vvhet.ar',
        address: '天津 天津市',
        createTime: '1998-11-28 02:40:34',
        status: 0,
        avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
      },
    ],
  },
  {
    id: '632104715831233474',
    username: '段芳',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '632104715831233474',
    email: 'z.wkntj@bbirgqolko.tp',
    address: '西藏自治区 日喀则地区',
    createTime: '1991-06-16 19:09:04',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
    children: [
      {
        id: '163153721894829418',
        username: '邹洋',
        gender: 1,
        user: {
          detail: {
            age: 17,
          },
        },
        idCard: '163153721894829418',
        email: 'g.ayzkx@tnh.li',
        address: '甘肃省 陇南市',
        createTime: '1979-05-04 23:56:48',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
      },
      {
        id: '486303128528105747',
        username: '杜娜',
        gender: 2,
        user: {
          detail: {
            age: 21,
          },
        },
        idCard: '486303128528105747',
        email: 'v.lcwzqg@amtrcq.fm',
        address: '福建省 厦门市',
        createTime: '2002-12-28 23:14:06',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
      },
      {
        id: '457858292000326557',
        username: '阎超',
        gender: 1,
        user: {
          detail: {
            age: 25,
          },
        },
        idCard: '457858292000326557',
        email: 'p.wwxmwh@bujhry.ky',
        address: '湖北省 黄石市',
        createTime: '1994-08-20 22:01:01',
        status: 1,
        avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      },
    ],
  },
])
// 表格配置项
const columns = reactive<ColumnProps[]>([
  { type: 'index', label: '#', width: 80 },
  { prop: 'username', label: '用户姓名' },
  {
    prop: 'gender',
    label: '性别',
    sortable: true,
    isFilterEnum: false,
    enum: [{
      label: '男',
      value: 1,
    }, {
      label: '女',
      value: 0,
    }],
    search: {
      el: 'select',
      props: { placeholder: '请输入性别查询', filterable: true, remote: true, reserveKeyword: true },
    },
    render: scope => <>{scope.row.gender === 1 ? '男' : '女'}</>,
  },
  { prop: 'idCard', label: '身份证号' },
  { prop: 'email', label: '邮箱' },
  { prop: 'address', label: '居住地址' },
  {
    prop: 'status',
    label: '用户状态',
    sortable: true,
    tag: true,
    enum: [{
      userLabel: '正常',
      userStatus: 0,
      tagType: 'success',
    }, {
      userLabel: '禁用',
      userStatus: 1,
      tagType: 'danger',
    }],
    search: { el: 'tree-select' },
    fieldNames: { label: 'userLabel', value: 'userStatus' },
  },
  { prop: 'createTime', label: '创建时间', width: 180 },
  { prop: 'operation', label: '操作', width: 300, fixed: 'right' },
])

function openDrawer(type: string, row?: any) {
  ElMessage.success(`小子你点${type}了吧, ${row?.username}`)
}

function deleteAccount(row?: any) {
  ElMessage.success(`小子你点删除了吧？ ${row.username}`)
}
</script>

<template>
  <div class="main-box">
    <TreeFilter
      label="name"
      title="部门列表(单选)"
      :data="treeFilterData"
      :default-value="1"
      @change="changeTreeFilter"
    />
    <div class="table-box">
      <ZyTable
        ref="zyTable"
        row-key="id"
        :indent="20"
        :columns="columns"
        :data="tableData"
        :search-col="{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" :icon="CirclePlus" @click="openDrawer('新增')">
            新增用户
          </el-button>
        </template>
        <!-- 表格操作 -->
        <template #operation="scope">
          <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)">
            查看
          </el-button>
          <el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">
            编辑
          </el-button>
          <el-button type="danger" link :icon="Delete" @click="deleteAccount(scope.row)">
            删除
          </el-button>
        </template>
      </ZyTable>
      <!-- <UserDrawer ref="drawerRef" /> -->
      <!-- <ImportExcel ref="dialogRef" /> -->
    </div>
  </div>
</template>
