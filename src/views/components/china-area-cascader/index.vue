<script setup lang="ts">
defineOptions({
  name: 'ChinaAreaCascader',
})

const selectedOptions = ref([])
const format = ref<'code' | 'name' | 'both'>('code')
const type = ref<'pc' | 'pca' | 'pcas'>('pca')
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <p class="font-medium">
        区域级联选择器
      </p>
    </template>
    <el-row :gutter="24">
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="flex flex-col items-center justify-center">
          <el-button-group>
            <el-button :type="format === 'code' ? 'primary' : ''" @click="format = 'code';selectedOptions = []">
              值为code
            </el-button>
            <el-button :type="format === 'name' ? 'primary' : ''" @click="format = 'name';selectedOptions = []">
              值为name
            </el-button>
            <el-button :type="format === 'both' ? 'primary' : ''" @click="format = 'both';selectedOptions = []">
              值为code和name
            </el-button>
          </el-button-group>

          <el-button-group>
            <el-button :type="type === 'pc' ? 'primary' : ''" @click="type = 'pc';selectedOptions = []">
              省市
            </el-button>
            <el-button :type="type === 'pca' ? 'primary' : ''" @click="type = 'pca';selectedOptions = []">
              省市区
            </el-button>
            <el-button :type="type === 'pcas' ? 'primary' : ''" @click="type = 'pcas';selectedOptions = []">
              省市区街道
            </el-button>
          </el-button-group>
          <PcasCascader
            v-model="selectedOptions"
            :disabled="false"
            :type="type"
            :format="format"
          />
          <div class="leading-10">
            <div>绑定值：{{ selectedOptions }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
