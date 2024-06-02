<script setup lang="tsx">
import { ElMessage, ElMessageBox } from 'element-plus'
import { CirclePlus, Delete, Download, EditPen, Refresh, Upload, View } from '@element-plus/icons-vue'
import type { ColumnProps, HeaderRenderScope, ZyTableInstance } from '@/components/ZyTable/interface'

// ZyTable 实例
const zyTable = ref<ZyTableInstance>()
// 自定义渲染表头（使用tsx语法）
function headerRender(scope: HeaderRenderScope<any>) {
  return (
    <el-button type="primary" onClick={() => ElMessage.success('我是通过 tsx 语法渲染的表头')}>
      {scope.column.label}
    </el-button>
  )
}
const tableData = ref([
  {
    id: '425910281113145186',
    username: '高明',
    gender: 2,
    user: {
      detail: {
        age: 11,
      },
    },
    idCard: '425910281113145186',
    email: 'y.jpundgr@wao.cz',
    address: '上海 上海市',
    createTime: '2023-09-05 18:35:01',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '837442221518806371',
    username: '蒋秀兰',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '837442221518806371',
    email: 'r.vxgly@yllhdihtk.tv',
    address: '辽宁省 营口市',
    createTime: '2018-08-05 07:19:32',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
  },
  {
    id: '783773749214035874',
    username: '胡明',
    gender: 2,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '783773749214035874',
    email: 'u.kjdiipfi@uoemp.gt',
    address: '山东省 日照市',
    createTime: '1996-06-08 03:44:02',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '315536610037555298',
    username: '顾秀英',
    gender: 1,
    user: {
      detail: {
        age: 13,
      },
    },
    idCard: '315536610037555298',
    email: 'r.oqlfu@hfdogllu.kh',
    address: '江苏省 苏州市',
    createTime: '1999-05-26 03:51:32',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '535604138804358892',
    username: '孔秀兰',
    gender: 1,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '535604138804358892',
    email: 'b.kxcm@cuo.th',
    address: '湖北省 黄冈市',
    createTime: '2022-09-02 22:37:57',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '974864388782532512',
    username: '余艳',
    gender: 1,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '974864388782532512',
    email: 'f.wtnkmeq@zashk.pro',
    address: '吉林省 松原市',
    createTime: '2011-08-15 08:13:05',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '534279453662322865',
    username: '常娜',
    gender: 2,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '534279453662322865',
    email: 'o.obccnh@butemmx.gov',
    address: '宁夏回族自治区 固原市',
    createTime: '1998-06-02 00:56:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '356244330335174143',
    username: '姚静',
    gender: 1,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '356244330335174143',
    email: 'j.urr@thrcnfzs.vg',
    address: '湖北省 十堰市',
    createTime: '1987-12-15 11:33:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '478844311292786857',
    username: '吕平',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '478844311292786857',
    email: 'd.txixiz@zkdewvnij.pk',
    address: '福建省 龙岩市',
    createTime: '2009-04-18 08:18:30',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '231731353586147062',
    username: '于霞',
    gender: 2,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '231731353586147062',
    email: 'j.cwklbrb@fdv.my',
    address: '甘肃省 酒泉市',
    createTime: '2019-01-04 16:08:43',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  }, {
    id: '425910281113145186',
    username: '高明',
    gender: 2,
    user: {
      detail: {
        age: 11,
      },
    },
    idCard: '425910281113145186',
    email: 'y.jpundgr@wao.cz',
    address: '上海 上海市',
    createTime: '2023-09-05 18:35:01',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '837442221518806371',
    username: '蒋秀兰',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '837442221518806371',
    email: 'r.vxgly@yllhdihtk.tv',
    address: '辽宁省 营口市',
    createTime: '2018-08-05 07:19:32',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
  },
  {
    id: '783773749214035874',
    username: '胡明',
    gender: 2,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '783773749214035874',
    email: 'u.kjdiipfi@uoemp.gt',
    address: '山东省 日照市',
    createTime: '1996-06-08 03:44:02',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '315536610037555298',
    username: '顾秀英',
    gender: 1,
    user: {
      detail: {
        age: 13,
      },
    },
    idCard: '315536610037555298',
    email: 'r.oqlfu@hfdogllu.kh',
    address: '江苏省 苏州市',
    createTime: '1999-05-26 03:51:32',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '535604138804358892',
    username: '孔秀兰',
    gender: 1,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '535604138804358892',
    email: 'b.kxcm@cuo.th',
    address: '湖北省 黄冈市',
    createTime: '2022-09-02 22:37:57',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '974864388782532512',
    username: '余艳',
    gender: 1,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '974864388782532512',
    email: 'f.wtnkmeq@zashk.pro',
    address: '吉林省 松原市',
    createTime: '2011-08-15 08:13:05',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '534279453662322865',
    username: '常娜',
    gender: 2,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '534279453662322865',
    email: 'o.obccnh@butemmx.gov',
    address: '宁夏回族自治区 固原市',
    createTime: '1998-06-02 00:56:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '356244330335174143',
    username: '姚静',
    gender: 1,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '356244330335174143',
    email: 'j.urr@thrcnfzs.vg',
    address: '湖北省 十堰市',
    createTime: '1987-12-15 11:33:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '478844311292786857',
    username: '吕平',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '478844311292786857',
    email: 'd.txixiz@zkdewvnij.pk',
    address: '福建省 龙岩市',
    createTime: '2009-04-18 08:18:30',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '231731353586147062',
    username: '于霞',
    gender: 2,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '231731353586147062',
    email: 'j.cwklbrb@fdv.my',
    address: '甘肃省 酒泉市',
    createTime: '2019-01-04 16:08:43',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  }, {
    id: '425910281113145186',
    username: '高明',
    gender: 2,
    user: {
      detail: {
        age: 11,
      },
    },
    idCard: '425910281113145186',
    email: 'y.jpundgr@wao.cz',
    address: '上海 上海市',
    createTime: '2023-09-05 18:35:01',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '837442221518806371',
    username: '蒋秀兰',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '837442221518806371',
    email: 'r.vxgly@yllhdihtk.tv',
    address: '辽宁省 营口市',
    createTime: '2018-08-05 07:19:32',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
  },
  {
    id: '783773749214035874',
    username: '胡明',
    gender: 2,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '783773749214035874',
    email: 'u.kjdiipfi@uoemp.gt',
    address: '山东省 日照市',
    createTime: '1996-06-08 03:44:02',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '315536610037555298',
    username: '顾秀英',
    gender: 1,
    user: {
      detail: {
        age: 13,
      },
    },
    idCard: '315536610037555298',
    email: 'r.oqlfu@hfdogllu.kh',
    address: '江苏省 苏州市',
    createTime: '1999-05-26 03:51:32',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '535604138804358892',
    username: '孔秀兰',
    gender: 1,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '535604138804358892',
    email: 'b.kxcm@cuo.th',
    address: '湖北省 黄冈市',
    createTime: '2022-09-02 22:37:57',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '974864388782532512',
    username: '余艳',
    gender: 1,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '974864388782532512',
    email: 'f.wtnkmeq@zashk.pro',
    address: '吉林省 松原市',
    createTime: '2011-08-15 08:13:05',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '534279453662322865',
    username: '常娜',
    gender: 2,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '534279453662322865',
    email: 'o.obccnh@butemmx.gov',
    address: '宁夏回族自治区 固原市',
    createTime: '1998-06-02 00:56:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '356244330335174143',
    username: '姚静',
    gender: 1,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '356244330335174143',
    email: 'j.urr@thrcnfzs.vg',
    address: '湖北省 十堰市',
    createTime: '1987-12-15 11:33:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '478844311292786857',
    username: '吕平',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '478844311292786857',
    email: 'd.txixiz@zkdewvnij.pk',
    address: '福建省 龙岩市',
    createTime: '2009-04-18 08:18:30',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '231731353586147062',
    username: '于霞',
    gender: 2,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '231731353586147062',
    email: 'j.cwklbrb@fdv.my',
    address: '甘肃省 酒泉市',
    createTime: '2019-01-04 16:08:43',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  }, {
    id: '425910281113145186',
    username: '高明',
    gender: 2,
    user: {
      detail: {
        age: 11,
      },
    },
    idCard: '425910281113145186',
    email: 'y.jpundgr@wao.cz',
    address: '上海 上海市',
    createTime: '2023-09-05 18:35:01',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '837442221518806371',
    username: '蒋秀兰',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '837442221518806371',
    email: 'r.vxgly@yllhdihtk.tv',
    address: '辽宁省 营口市',
    createTime: '2018-08-05 07:19:32',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
  },
  {
    id: '783773749214035874',
    username: '胡明',
    gender: 2,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '783773749214035874',
    email: 'u.kjdiipfi@uoemp.gt',
    address: '山东省 日照市',
    createTime: '1996-06-08 03:44:02',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '315536610037555298',
    username: '顾秀英',
    gender: 1,
    user: {
      detail: {
        age: 13,
      },
    },
    idCard: '315536610037555298',
    email: 'r.oqlfu@hfdogllu.kh',
    address: '江苏省 苏州市',
    createTime: '1999-05-26 03:51:32',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '535604138804358892',
    username: '孔秀兰',
    gender: 1,
    user: {
      detail: {
        age: 12,
      },
    },
    idCard: '535604138804358892',
    email: 'b.kxcm@cuo.th',
    address: '湖北省 黄冈市',
    createTime: '2022-09-02 22:37:57',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '974864388782532512',
    username: '余艳',
    gender: 1,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '974864388782532512',
    email: 'f.wtnkmeq@zashk.pro',
    address: '吉林省 松原市',
    createTime: '2011-08-15 08:13:05',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '534279453662322865',
    username: '常娜',
    gender: 2,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '534279453662322865',
    email: 'o.obccnh@butemmx.gov',
    address: '宁夏回族自治区 固原市',
    createTime: '1998-06-02 00:56:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
  },
  {
    id: '356244330335174143',
    username: '姚静',
    gender: 1,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '356244330335174143',
    email: 'j.urr@thrcnfzs.vg',
    address: '湖北省 十堰市',
    createTime: '1987-12-15 11:33:51',
    status: 1,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '478844311292786857',
    username: '吕平',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '478844311292786857',
    email: 'd.txixiz@zkdewvnij.pk',
    address: '福建省 龙岩市',
    createTime: '2009-04-18 08:18:30',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
  {
    id: '231731353586147062',
    username: '于霞',
    gender: 2,
    user: {
      detail: {
        age: 29,
      },
    },
    idCard: '231731353586147062',
    email: 'j.cwklbrb@fdv.my',
    address: '甘肃省 酒泉市',
    createTime: '2019-01-04 16:08:43',
    status: 0,
    avatar: 'https://i.imgtg.com/2023/01/16/QR57a.jpg',
  },
])
// 表格配置项
const columns = reactive<ColumnProps<any>[]>([
  { type: 'index', label: '序号', fixed: 'left', width: 70 },
  { type: 'selection', width: 50 },
  { type: 'sort', label: '排序', width: 60 },
  { type: 'expand', label: '展开', width: 60 },
  {
    prop: 'username',
    label: '用户姓名',
    search: { el: 'input', tooltip: '我是搜索提示' },
    render: (scope) => {
      return (
        <el-button type="primary" link onClick={() => ElMessage.success('我是通过 tsx 语法渲染的内容')}>
          {scope.row.username}
        </el-button>
      )
    },
  },
  {
    // 多级 prop
    prop: 'user.detail.age',
    label: '年龄',
    search: {
      // 自定义 search 显示内容
      render: ({ searchParam }) => {
        return (
          <div class="flex flex-1 items-center">
            <el-input vModel_trim={searchParam.minAge} placeholder="最小年龄" />
            <span class="mx-10px">-</span>
            <el-input vModel_trim={searchParam.maxAge} placeholder="最大年龄" />
          </div>
        )
      },
    },
  },
  { prop: 'idCard', label: '身份证号', search: { el: 'input' } },
  { prop: 'email', label: '邮箱' },
  { prop: 'address', label: '居住地址' },
  {
    prop: 'status',
    label: '用户状态',
    search: { el: 'tree-select', props: { filterable: true } },
    fieldNames: { label: 'userLabel', value: 'userStatus' },
    render: (scope) => {
      return (
        <>
          <el-tag type={scope.row.status ? 'success' : 'danger'}>{scope.row.status ? '启用' : '禁用'}</el-tag>
        </>
      )
    },
  },
  {
    prop: 'createTime',
    label: '创建时间',
    headerRender,
    width: 180,
    search: {
      el: 'date-picker',
      span: 2,
      props: { type: 'datetimerange', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
      defaultValue: ['2022-11-12 11:35:00', '2022-12-12 11:35:00'],
    },
  },
  { prop: 'operation', label: '操作', fixed: 'right', width: 160 },
])

const initParam = reactive({ type: 1 })

// dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 list && total && pageNum && pageSize 这些字段，可以在这里进行处理成这些字段
// 或者直接去 hooks/useTable.ts 文件中把字段改为你后端对应的就行
function dataCallback(data: any) {
  return {
    list: tableData.value,
    total: data.total,
    pageNum: data.pageNum,
    pageSize: data.pageSize,
  }
}
// 表格拖拽排序
function sortTable({ newIndex, oldIndex }: { newIndex?: number, oldIndex?: number }) {
  console.log(newIndex, oldIndex)
  ElMessage.success('修改列表排序成功')
}

function onAdd(scope: any) {
  ElMessage.success(`新增用户${JSON.stringify(scope)}`)
}
</script>

<template>
  <div class="table-box">
    <ZyTable
      ref="zyTable"
      :columns="columns"
      :init-param="initParam"
      :data-callback="dataCallback"
      :data="tableData"
      highlight-current-row
      @darg-sort="sortTable"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus" @click="onAdd(scope)">
          新增用户
        </el-button>
      </template>
      <!-- Expand -->
      <template #expand="scope">
        {{ scope.row }}
      </template>
      <!-- usernameHeader -->
      <template #usernameHeader="scope">
        <el-button type="primary" @click="ElMessage.success('我是通过作用域插槽渲染的表头')">
          {{ scope.column.label }}
        </el-button>
      </template>
      <!-- createTime -->
      <template #createTime="scope">
        <el-button type="primary" link @click="ElMessage.success('我是通过作用域插槽渲染的内容')">
          {{ scope.row.createTime }}
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation>
        <el-button type="primary" link :icon="EditPen">
          编辑
        </el-button>
        <el-button type="danger" link :icon="Delete">
          删除
        </el-button>
      </template>
    </ZyTable>
  </div>
</template>
