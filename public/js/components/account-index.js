(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9eev":function(e,t,a){"use strict";a.r(t);var n={name:"AccountIndex",metaInfo:{title:"Account"},mixins:[a("H7hI").a],data:function(){return{url:"account"}}},o=a("KHd+"),r=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("AddButton",{attrs:{to:{name:"account-create"}}}),e._v(" "),e.checkedRows.length?a("b-button",{attrs:{type:"is-danger",size:"is-small","icon-left":"delete",rounded:""},on:{click:e.deleteData}},[a("span",[e._v("Delete")])]):e._e(),e._v(" "),a("hr"),e._v(" "),a("b-table",{attrs:{data:e.data,loading:e.loading,"checked-rows":e.checkedRows,checkable:"","checkbox-position":e.checkboxPosition,paginated:"",hoverable:"",scrollable:"","backend-pagination":"",total:e.total,"per-page":e.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","backend-sorting":"","default-sort-direction":e.defaultSortOrder,"default-sort":[e.sortField,e.sortOrder]},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t},"page-change":e.onPageChange,sort:e.onSort}},[a("template",{slot:"empty"},[a("div",{staticClass:"has-text-centered"},[e._v("Empty")])]),e._v(" "),a("b-table-column",{attrs:{field:"created_at",label:"Created At",sortable:"",centered:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.created_at?new Date(t.row.created_at).toLocaleString():"unknown")+"\n    ")]}}])}),e._v(" "),a("b-table-column",{attrs:{field:"name",label:"Name",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.name)+"\n    ")]}}])}),e._v(" "),a("b-table-column",{attrs:{field:"email",label:"E-Mail",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.email)+"\n    ")]}}])}),e._v(" "),a("b-table-column",{attrs:{field:"avatar",label:"Photo"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("figure",{staticClass:"image is-32x32"},[a("img",{staticClass:"is-rounded",attrs:{src:e.row.avatar}})])]}}])}),e._v(" "),a("b-table-column",{attrs:{field:"action",label:"Action"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("ActionButton",{attrs:{edit:!1,"detail-to":{name:"account-id",params:{id:e.row.id}}}})]}}])}),e._v(" "),a("template",{slot:"bottom-left"},[a("b",[e._v("Total checked")]),e._v(": "+e._s(e.checkedRows.length)+"\n    ")])],2)],1)}),[],!1,null,null,null);t.default=r.exports},H7hI:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("o0o1"),o=a.n(n),r=a("ck9e");function c(e,t,a,n,o,r,c){try{var s=e[r](c),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(n,o)}function s(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function s(e){c(r,n,o,s,i,"next",e)}function i(e){c(r,n,o,s,i,"throw",e)}s(void 0)}))}}var i={components:{AddButton:function(){return a.e(55).then(a.bind(null,"nKYg"))},ActionButton:function(){return a.e(54).then(a.bind(null,"/6zD"))}},data:function(){return{url:"/",data:[],total:0,loading:!1,checkboxPosition:"left",checkedRows:[],sortField:"created_at",sortOrder:"desc",defaultSortOrder:"desc",page:1,perPage:10}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return s(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,r.a.post("/".concat(e.url,"/list"),{sort_field:e.sortField,sort_order:e.sortOrder,per_page:e.perPage,page:e.page}).then((function(t){var a=t.data.data;e.data=a.data;var n=a.total;a.total/e.perPage>1e3&&(n=1e3*e.perPage),e.total=n,e.loading=!1})).catch((function(t){throw e.data=[],e.total=0,e.loading=!1,t}));case 3:case"end":return t.stop()}}),t)})))()},onPageChange:function(e){this.page=e,this.checkedRows=[],this.fetchData()},onSort:function(e,t){this.sortField=e,this.sortOrder=t,this.checkedRows=[],this.fetchData()},deleteData:function(){var e,t=this;this.$buefy.dialog.confirm({title:"Deleting data",message:"Are you sure you want to <b>delete</b> selected data? This action cannot be undone.",confirmText:"Delete Data",type:"is-danger",hasIcon:!0,onConfirm:(e=s(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.checkedRows.map((function(e){return e.id})),t.checkedRows=[],e.next=4,Object(r.a)({method:"delete",url:"/".concat(t.url),data:{selectedData:a}}).then((function(e){var a=e.data;t.$buefy.toast.open({message:a.message,type:"is-danger"})})).catch((function(e){var a=e.response.data;t.$buefy.toast.open({message:a.message,type:"is-danger"})}));case 4:return e.next=6,t.fetchData();case 6:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}}}}}]);