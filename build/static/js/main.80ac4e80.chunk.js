(this.webpackJsonptailwind=this.webpackJsonptailwind||[]).push([[0],{29:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(21),s=c.n(a),r=c(15),i=(c(29),c(2)),o=c(3),d=c(5),l=c(4),u=c(6),h=c(0),f=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"bg-sky-600 text-white flex items-center px-2 py-1 ",children:[Object(h.jsxs)(r.b,{to:"/",className:" flex items-center gap-2 ml-7",children:[Object(h.jsx)("img",{src:"https://cdn-icons.flaticon.com/png/128/1313/premium/1313613.png?token=exp=1634557304~hmac=b5e9ba2766f75a1b95e7851faf521d44",alt:"",width:"20px"}),Object(h.jsx)("p",{className:"text-xl font-bold",children:"Trello"})]}),Object(h.jsxs)("div",{className:"flex items-center px-2 py-1 space-x-8 ",children:[Object(h.jsx)("p",{className:" px-2 hover:bg-blue-400 rounded",children:"workspace"}),Object(h.jsx)("p",{children:"recent"}),Object(h.jsx)("p",{children:"more"})]})]})}}]),c}(n.Component),b=f,p=c(24),j=c(12),m=c(8),O=c.n(m),x=c(13),k=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.name,c=e.prefs,n=c.backgroundImage?"url(".concat(c.backgroundImageScaled[2].url,")"):c.backgroundColor;return Object(h.jsx)(r.b,{className:" h-32 w-1/5  cursor-pointer p-3  text-white",to:"/".concat(this.props.id),style:{background:"".concat(n," no-repeat center ")},children:Object(h.jsx)("p",{className:"font-bold",children:t})})}}]),c}(n.Component),v=k,g=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"bg-sky-700 text-blue-50 hover:bg-sky-800 rounded px-4 py-1 ",children:this.props.title})})}}]),c}(n.Component),y=g,N=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.OnSubmit(n.state.boardName),n.props.closeModal()},n.closeModal=function(){n.props.closeModal()},n.state={boardName:""},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{style:{left:"40%"},className:" bg-black bg-opacity-70 rounded absolute  top-0  h-1/5 w-1/5 flex p-3 ",children:[Object(h.jsxs)("form",{onSubmit:this.handleSubmit,action:"",className:"flex flex-wrap items-center justify-around",children:[Object(h.jsx)("input",{className:"p-1 w-8/12 ",type:"text",name:"",id:"",value:this.state.boardName,onChange:function(t){e.setState({boardName:t.target.value})},placeholder:"Enter board name...."}),Object(h.jsx)(y,{title:"Create"})]}),Object(h.jsx)("button",{onClick:this.closeModal,className:"absolute top-0 right-0 p-10 text-white",children:"x"})]})}}]),c}(n.Component),C=function(e){return fetch("https://api.trello.com/1/boards/?name=".concat(e,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},I=function(e){return fetch("https://api.trello.com/1/boards/".concat(e,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},S=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).openModal=function(){n.setState({openModal:!0})},n.closeModal=function(){n.setState({openModal:!1})},n.updateBoard=function(){var e=Object(x.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:c=e.sent,n.props.onBoardAdd(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleSubmit=function(e){n.updateBoard(e)},n.state={openModal:!1},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{onClick:this.openModal,className:" bg-gray-300 h-20 w-1/5 inline-block cursor-pointer p-3  m-1 flex items-center justify-center text-gray-400",children:"create new board"}),this.state.openModal&&Object(h.jsx)(N,{closeModal:this.closeModal,OnSubmit:this.handleSubmit})]})}}]),c}(n.Component),L=S,w=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).getBoards=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.trello.com/1/members/me/boards?fields=name,url,prefs&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}));case 2:t=e.sent,n.setState({boards:t});case 4:case"end":return e.stop()}}),e)}))),n.componentDidMount=function(){n.getBoards()},n.handleBoardAdd=function(e){n.setState({boards:[].concat(Object(j.a)(n.state.boards),[e])})},n.state={boards:[]},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.boards.map((function(e){return Object(h.jsx)(v,Object(p.a)({},e),e.id)}));return Object(h.jsxs)("div",{className:"  flex-column items-center  w-full px-4 ",children:[Object(h.jsx)("h1",{className:"text-2xl text-gray-500 font-bold",children:"Your work space boards"}),Object(h.jsx)("div",{className:"flex flex-wrap my-5 gap-5",children:e}),Object(h.jsx)(L,{onBoardAdd:this.handleBoardAdd})]})}}]),c}(n.Component),D=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"flex items-center justify-center w-90 mx-auto p-5 my-3   h-full",children:Object(h.jsx)(w,{})})}}]),c}(n.Component),E=D,A=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("button",{className:"px-2 text-".concat(this.props.size," text-gray-500 rounded-full hover:text-gray-600"),children:[" ","x"]})}}]),c}(n.Component),M=A,T=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).deleteItem=function(){fetch("https://api.trello.com/1/checklists/".concat(n.props.checkListId,"/checkItems/").concat(n.props.checkItemId,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"DELETE"}).catch((function(e){return console.error(e)}))},n.updateItem=function(e,t,c){fetch("https://api.trello.com/1/cards/".concat(e,"/checkItem/").concat(t,"?state=").concat(c,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"PUT"}).catch((function(e){return console.error(e)}))},n.handleDelete=function(){n.deleteItem(),n.props.handleDeleteItem(n.props.checkItemId)},n.handleCheckBox=function(e){n.setState({checkState:"complete"===n.state.checkState?"incomplete":"complete"},(function(){n.updateItem(n.props.cardId,n.props.checkItemId,n.state.checkState)}))},n.state={checkState:n.props.state},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"mx-6 text-gray-700 hover:bg-gray-200 block w-1/2 rounded px-2 my-1 flex justify-between ",children:[Object(h.jsxs)("label",{className:"inline-flex items-center",children:[Object(h.jsx)("input",{type:"checkbox",className:"form-checkbox",checked:"complete"===this.state.checkState,onChange:this.handleCheckBox}),Object(h.jsx)("span",{className:"ml-2",children:this.props.itemName})]}),Object(h.jsx)("div",{onClick:this.handleDelete,children:Object(h.jsx)(M,{})})]})}}]),c}(n.Component),B=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleDeleteItem=function(t){e.props.handleDeleteItem(t)},e.handleItemChange=function(t){e.props.handleItemChange(t)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.props.checkListItems.map((function(t){return Object(h.jsx)(T,{itemName:t.name,checkListId:e.props.checkListId,checkItemId:t.id,handleDeleteItem:e.handleDeleteItem,state:t.state,cardId:e.props.cardId},t.id)}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:t})})}}]),c}(n.Component),P=B,G=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleClose=function(){n.setState({isEditing:!1})},n.handleOpen=function(){n.setState({isEditing:!0})},n.updateData=function(e){fetch("https://api.trello.com/1/checklists/".concat(n.props.checkListId,"/checkItems?name=").concat(e,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return n.props.addItem(e)})).catch((function(e){return console.error(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.updateData(n.state.itemName),n.setState({itemName:""}),n.setState({isEditing:!1})},n.state={itemName:"",isEditing:!1},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:this.handleOpen,className:"bg-gray-200 text-gray-400 ml-3 p-1 rounded",children:"Add Item"})}),c=Object(h.jsx)("div",{className:"bg-gray-300 p-2 absolute",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,action:"",children:[Object(h.jsx)("input",{className:"p-1 rounded",type:"text",value:this.state.itemName,onChange:function(t){e.setState({itemName:t.target.value})}}),Object(h.jsxs)("div",{className:" mt-3 flex gap-3",children:[Object(h.jsx)("button",{className:"bg-blue-500 text-blue-200 px-2 rounded my-2 ",children:"Add Items"}),Object(h.jsx)("button",{className:"text-gray-600",onClick:this.handleClose,children:"X"})]})]})});return this.state.isEditing?c:t}}]),c}(n.Component),z=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"bg-gray-300 text-gray-500 shadow-md hover:text-gray-600  rounded px-2 ",children:"Delete"})})}}]),c}(n.Component),U=z,F=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).fetchdata=function(){fetch("https://api.trello.com/1/checklists/".concat(n.props.checkList.id,"/checkItems?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n.setState({items:e})})).catch((function(e){return console.error(e)}))},n.deleteCheckList=function(e){fetch("https://api.trello.com/1/checklists/".concat(e,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"DELETE"}).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){n.fetchdata()},n.handleAddItem=function(e){n.setState({items:[].concat(Object(j.a)(n.state.items),[e])})},n.handleDelete=function(){n.deleteCheckList(n.props.checkList.id),n.props.handleDelete(n.props.checkList.id)},n.deleteItem=function(e){n.setState({items:n.state.items.filter((function(t){return t.id!==e}))})},n.state={items:[]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"flex items-center justify-between py-5",children:[Object(h.jsxs)("h1",{className:" font-bold  ",children:[" + ",this.props.checkListName]}),Object(h.jsx)("div",{onClick:this.handleDelete,children:Object(h.jsx)(U,{})})]}),Object(h.jsx)(P,{cardId:this.props.cardId,checkListId:this.props.checkList.id,checkListItems:this.state.items,handleDeleteItem:this.deleteItem}),Object(h.jsx)(G,{checkListId:this.props.checkList.id,addItem:this.handleAddItem})]})}}]),c}(n.Component),J=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).updateData=function(e){return fetch("https://api.trello.com/1/checklists/".concat(e,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){n.props.checkListIds.forEach((function(e){n.updateData(e).then((function(e){n.setState({checklistsData:[].concat(Object(j.a)(n.state.checklistsData),[e])})}))}))},n.componentDidUpdate=function(e){e.addCheckListdata.id!==n.props.addCheckListdata.id&&n.setState({checklistsData:[].concat(Object(j.a)(n.state.checklistsData),[n.props.addCheckListdata])})},n.deleteCheckList=function(e){n.setState({checklistsData:n.state.checklistsData.filter((function(t){return t.id!==e}))})},n.state={checklistsData:[]},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.checklistsData.map((function(t){return Object(h.jsx)(F,{cardId:e.props.cardId,checkListName:t.name,checkList:t,handleDelete:e.deleteCheckList},t.id)}));return Object(h.jsx)("div",{children:t})}}]),c}(n.Component),X=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).updatedata=function(e){fetch("https://api.trello.com/1/checklists?name=".concat(e,"&idCard=").concat(n.props.cardId,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){n.props.handleAddCheckList(e)})).catch((function(e){return console.error(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.updatedata(n.state.value),n.setState({isEditing:!1,value:""})},n.state={value:"",isEditing:!1},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{onClick:function(){return e.setState({isEditing:!0})},children:"Check list"}),this.state.isEditing&&Object(h.jsx)("div",{className:"absolute bg-gray-400 bg-opacity-30 p-2",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"flex-col p-2 ",action:"",children:[Object(h.jsx)("input",{className:"block p-2",type:"text",name:"",id:"",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),Object(h.jsxs)("span",{className:"flex items-center gap-4 m-2",children:[Object(h.jsx)(y,{title:"Add check list"}),Object(h.jsx)("div",{onClick:function(){return e.setState({isEditing:!1})},children:Object(h.jsx)(M,{size:"xl"})})]})]})})]})}}]),c}(n.Component),Y=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleClose=function(){n.props.handleClose()},n.handleAddCheckList=function(e){n.setState({addCheckListdata:e})},n.state={addCheckListdata:[]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:" bg-black bg-opacity-60 absolute inset-0 h-full flex items-center justify-center ",id:"overlay",children:Object(h.jsxs)("div",{className:"bg-white  relative grid bg-gray-100 grid-cols-3 gap-8 w-5/12 p-20",children:[Object(h.jsxs)("div",{className:"col-span-2 p-4",children:[Object(h.jsx)("h1",{className:"text-bold",children:this.props.name}),Object(h.jsxs)("p",{className:"text-gray-500",children:["in list",Object(h.jsx)("span",{className:"italic underline ",children:this.props.listName})]}),Object(h.jsx)("div",{children:Object(h.jsx)(J,{cardId:this.props.cardId,addCheckListdata:this.state.addCheckListdata,checkListIds:this.props.checkListIds})})]}),Object(h.jsxs)("div",{className:"col-span-1",children:[Object(h.jsx)("h1",{children:"Add to card"}),Object(h.jsx)("div",{className:" cursor-pointer rounded  bg-gray-300 my-3 p-1",children:Object(h.jsx)(X,{cardId:this.props.cardId,handleAddCheckList:this.handleAddCheckList})})]}),Object(h.jsx)("button",{onClick:this.handleClose,className:"absolute top-0 right-0 p-10",children:Object(h.jsx)(M,{size:"3xl"})})]})})}}]),c}(n.Component),q=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).openModal=function(e){n.setState({openModal:!0})},n.CloseModal=function(){n.setState({openModal:!1})},n.deletecard=function(){fetch("https://api.trello.com/1/cards/".concat(n.props.card.id,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"DELETE"}).catch((function(e){return console.error(e)}))},n.handleDelete=function(e){e.stopPropagation(),n.deletecard(),n.props.handleDelete(n.props.card.id)},n.state={openModal:!1},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.card.name;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{onClick:this.openModal,className:"bg-white hover:bg-gray-100 shadow rounded w-11/12 p-1 my-2",children:Object(h.jsxs)("div",{className:"flex justify-between",children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{onClick:this.handleDelete,className:"px-2 text-gray-500 ",children:[" ","x"]})})]})}),this.state.openModal&&Object(h.jsx)(Y,{handleClose:this.CloseModal,name:e,listName:this.props.listName,checkListIds:this.props.card.idChecklists,cardId:this.props.card.id})]})}}]),c}(n.Component),H=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleEdit=function(){n.setState({isEditing:!0})},n.closeEditing=function(){n.setState({isEditing:!1})},n.updatedata=function(){""!==n.state.cardName&&fetch("https://api.trello.com/1/cards?name=".concat(n.state.cardName,"&idList=").concat(n.props.listId,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){n.props.cardAdded(e)})).catch((function(e){return console.error(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.updatedata(),n.setState({isEditing:!1,cardName:""})},n.state={isEditing:!1,cardName:""},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return this.state.isEditing?Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"flex-col inline-block my-2",onSubmit:this.handleSubmit,action:"",children:[Object(h.jsx)("input",{className:"p-2 h-20 mb-4 shadow-md ",type:"text",name:"",id:"",value:this.state.cardName,onChange:function(t){e.setState({cardName:t.target.value})}}),Object(h.jsxs)("div",{className:" flex gap-5 items-center",children:[Object(h.jsx)(y,{title:"Add card"}),Object(h.jsx)("div",{onClick:this.closeEditing,className:"text-gray-400  p-1",children:Object(h.jsx)(M,{size:"2xl"})})]})]})}):Object(h.jsx)("div",{onClick:this.handleEdit,children:Object(h.jsxs)("p",{className:" hover:bg-gray-300 cursor-pointer rounded w-11/12 p-1  text-gray-500 my-2",children:[" ","+ Add a card"]})})}}]),c}(n.Component),K=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).UpdateData=function(){fetch("https://api.trello.com/1/lists/".concat(n.props.list.id,"/cards?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({cards:e})})).catch((function(e){return console.error(e)}))},n.deleteList=function(){fetch("https://api.trello.com/1/lists/".concat(n.props.list.id,"/closed?value=true&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"PUT"}).catch((function(e){return console.error(e)}))},n.handleDelete=function(){n.deleteList(),n.props.handleDeleteList(n.props.list.id)},n.cardAdded=function(e){n.setState({cards:[].concat(Object(j.a)(n.state.cards),[e])})},n.deleteCard=function(e){n.setState({cards:n.state.cards.filter((function(t){return t.id!==e}))})},n.state={cards:[]},n}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.UpdateData()}},{key:"render",value:function(){var e=this,t=this.props.list.name,c=this.state.cards.map((function(c){return Object(h.jsx)(q,{card:c,listName:t,handleDelete:e.deleteCard},c.id)}));return Object(h.jsxs)("div",{className:"bg-gray-100 rounded shadow flex-shrink-0 flex-column w-72 m-5 pl-4 pb-3 pt-3",children:[Object(h.jsxs)("div",{className:"flex justify-between p-2",children:[Object(h.jsxs)("div",{className:"font-bold",children:[t," "]}),Object(h.jsx)("div",{onClick:this.handleDelete,children:Object(h.jsx)(U,{})})]}),c,Object(h.jsx)(H,{listId:this.props.list.id,cardAdded:this.cardAdded})]})}}]),c}(n.Component),Q=function(e){return fetch("https://api.trello.com/1/boards/".concat(e,"/lists?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},R=function(e,t){return fetch("https://api.trello.com/1/lists?name=".concat(e,"&pos=bottom&idBoard=").concat(t,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},V=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleEdit=function(){n.setState({isEditing:!0})},n.handleCloseEdit=function(){n.setState({isEditing:!1})},n.newList=function(){var e=Object(x.a)(O.a.mark((function e(t,c){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,c);case 2:a=e.sent,n.props.handleAddList(a);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),n.handleSubmit=function(e){e.preventDefault(),n.newList(n.state.listName,n.props.boardId),n.setState({listName:""})},n.state={isEditing:!1,listName:""},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return this.state.isEditing?Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"bg-gray-200 w-72 m-5 pl-4 p-3 rounded",action:"",children:[Object(h.jsx)("input",{className:"inline-block h-8 p-2 rounded-md",type:"text",placeholder:"Enter list title",value:this.state.listName,onChange:function(t){return e.setState({listName:t.target.value})}}),Object(h.jsxs)("div",{className:"flex items-center gap-5 my-2",children:[Object(h.jsx)(y,{title:"Add List"}),Object(h.jsx)("div",{onClick:this.handleCloseEdit,children:Object(h.jsx)(M,{size:"2xl"})})]})]}):Object(h.jsx)("div",{onClick:this.handleEdit,className:" bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-25 bg-white cursor-pointer rounded-md  text-gray-500 shadow  w-72 m-5 pl-4 p-2 ",children:"+ Add another list"})}}]),c}(n.Component),W=V,Z=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).getListData=function(){var e=Object(x.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:c=e.sent,n.setState({lists:c,loading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getBackgroundImage=function(){var e=Object(x.a)(O.a.mark((function e(t){var c,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return c=e.sent,n=c.prefs,a=n.backgroundImage?"url(".concat(n.backgroundImageScaled[5].url,") no-repeat center"):n.backgroundColor,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.componentDidMount=function(){n.getListData(n.props.boardId),n.getBackgroundImage(n.props.boardId).then((function(e){n.setState({background:e})}))},n.addList=function(e){n.setState({lists:[].concat(Object(j.a)(n.state.lists),[e])})},n.deleteList=function(e){n.setState({lists:n.state.lists.filter((function(t){return t.id!==e}))})},n.state={lists:[],loading:!0,background:""},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.lists.map((function(t){return Object(h.jsx)(K,{let:!0,list:t,handleDeleteList:e.deleteList},t.id)}));return this.state.loading?Object(h.jsx)("div",{children:"Loading....."}):Object(h.jsx)("div",{style:{background:this.state.background},className:"h-screen",children:Object(h.jsxs)("div",{className:"flex  items-start",children:[Object(h.jsx)("div",{className:"flex items-start",children:t}),Object(h.jsx)(W,{boardId:this.props.boardId,handleAddList:this.addList})]})})}}]),c}(n.Component),$=Z,_=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).state={boardId:"",isClicked:!1},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",component:function(){return Object(h.jsx)(E,{})}}),Object(h.jsx)(u.a,{exact:!0,path:"/:id",component:function(e){return Object(h.jsx)($,{boardId:e.match.params.id})}})]})]})}}]),c}(n.Component);s.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.80ac4e80.chunk.js.map