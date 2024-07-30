<!--
 * @Author: yk
 * @Date: 2024-07-29 08:27:38
 * @Description: 
-->
<script setup>

  import {reactive} from 'vue'

  const data = reactive({
    list:[
      {id: "1", name: "York", email: "yorkcode@163.com", note: "xxxx", create_time: "2024-07-29"},
      {id: "2", name: "Bob", email: "Bob@gmail.com", note: "xxxx", create_time: "2024-07-19"},
    ]
  })

</script>

<template>
    <el-table  :data="data.list" style="width: 90%" border>
      <el-table-column label="ID" prop="id" width="60"/>
      <el-table-column label="Name" prop="name" />
      <el-table-column label="Email" prop="email" />
      <el-table-column label="Note" prop="note" />
      <el-table-column label="Create" prop="create_time" />

      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<style scoped>
.el-table{
  margin-top: 10px;
}
.el-breadcrumb{
  margin-bottom: 10px
}
</style>