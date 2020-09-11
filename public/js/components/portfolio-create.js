(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{a2lJ:function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),n=a.n(r),o=a("e7F3"),i=a("uUT0"),s=a("3WF5"),c=a.n(s),u=a("ck9e");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e,a,r,n,o,i){try{var s=t[o](i),c=s.value}catch(t){return void a(t)}s.done?e(c):Promise.resolve(c).then(r,n)}function g(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function i(t){p(o,r,n,i,s,"next",t)}function s(t){p(o,r,n,i,s,"throw",t)}i(void 0)}))}}var m={name:"CreatePortfolioWork",metaInfo:{title:"Portfolio: Create Work"},components:{ValidationObserver:o.a,FormInput:function(){return Promise.resolve().then(a.bind(null,"S2+X"))},FormImage:function(){return a.e(2).then(a.bind(null,"Pyp4"))},FormTagInput:function(){return a.e(6).then(a.bind(null,"L9Lv"))},SaveButton:function(){return a.e(0).then(a.bind(null,"Cj62"))}},data:function(){return{category:{data:[],isFetching:!1},tag:{data:[],isFetching:!1},work:{name:"",description:"",url:"",photo:null,category_id:[],tag_id:[]}}},methods:{getFilteredCategories:function(t){var e=this;return g(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.length){a.next=3;break}return e.category.data=[],a.abrupt("return");case 3:return e.category.isFetching=!0,a.next=6,u.a.get("/portfolio/category?search=".concat(t)).then((function(t){var a=t.data;e.category.data=[],a.data.forEach((function(t){return e.category.data.push(t)}))})).catch((function(t){throw e.category.data=[],t})).finally((function(){e.category.isFetching=!1}));case 6:case"end":return a.stop()}}),a)})))()},getFilteredTags:function(t){var e=this;return g(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.length){a.next=3;break}return e.tag.data=[],a.abrupt("return");case 3:return e.tag.isFetching=!0,a.next=6,u.a.get("/portfolio/tag?search=".concat(t)).then((function(t){var a=t.data;e.tag.data=[],a.data.forEach((function(t){return e.tag.data.push(t)}))})).catch((function(t){throw e.tag.data=[],t})).finally((function(){e.tag.isFetching=!1}));case 6:case"end":return a.stop()}}),a)})))()},onSubmit:function(){var t=this;return g(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.serialize)(d(d({},t.work),{},{category_id:c()(t.work.category_id,"id"),tag_id:c()(t.work.tag_id,"id")}),{nullsAsUndefineds:!0}),e.next=3,u.a.post("/portfolio",a).then((function(e){e.data.success&&t.$buefy.toast.open({message:e.data.message,type:"is-success"}),t.$router.back()})).catch((function(e){e.response.data.errors&&t.$refs.form.setErrors(e.response.data.errors),t.$buefy.toast.open({message:e.response.data.message,type:"is-danger"})}));case 3:case"end":return e.stop()}}),e)})))()}}},h=a("KHd+"),b=Object(h.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.passes;return[a("form",{on:{submit:function(e){return e.preventDefault(),r(t.onSubmit)}}},[a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-half-tablet"},[a("FormInput",{attrs:{label:"Name",name:"name"},model:{value:t.work.name,callback:function(e){t.$set(t.work,"name",e)},expression:"work.name"}})],1),t._v(" "),a("div",{staticClass:"column is-half-tablet"},[a("FormInput",{attrs:{label:"Description",name:"description",type:"textarea"},model:{value:t.work.description,callback:function(e){t.$set(t.work,"description",e)},expression:"work.description"}})],1),t._v(" "),a("div",{staticClass:"column is-half-tablet"},[a("FormInput",{attrs:{label:"URL",name:"url"},model:{value:t.work.url,callback:function(e){t.$set(t.work,"url",e)},expression:"work.url"}})],1),t._v(" "),a("div",{staticClass:"column is-half-tablet"},[a("FormImage",{attrs:{label:"Photo",name:"photo",message:"For best results, use an image with an aspect ratio of 16:9.",rounded:!1},model:{value:t.work.photo,callback:function(e){t.$set(t.work,"photo",e)},expression:"work.photo"}})],1),t._v(" "),a("div",{staticClass:"column is-half-tablet"},[a("FormTagInput",{attrs:{label:"Categories",name:"category_id",data:t.category.data,loading:t.category.isFetching,field:"name",icon:"folder-table",placeholder:"Add a category"},on:{typing:t.getFilteredCategories},model:{value:t.work.category_id,callback:function(e){t.$set(t.work,"category_id",e)},expression:"work.category_id"}})],1),t._v(" "),a("div",{staticClass:"column is-half-tablet"},[a("FormTagInput",{attrs:{label:"Tags",name:"tag_id",data:t.tag.data,loading:t.tag.isFetching,field:"name",icon:"folder-table",placeholder:"Add a tag"},on:{typing:t.getFilteredTags},model:{value:t.work.tag_id,callback:function(e){t.$set(t.work,"tag_id",e)},expression:"work.tag_id"}})],1)]),t._v(" "),a("hr"),t._v(" "),a("SaveButton")],1)]}}])})],1)}),[],!1,null,null,null);e.default=b.exports}}]);