(this.webpackJsonptailwind=this.webpackJsonptailwind||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(19),s=c.n(a),i=c(14),r=(c(27),c(2)),o=c(3),d=c(5),l=c(4),h=c(6),u=c(0),b=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"bg-blue-500 text-white flex items-center px-2 py-1",children:[Object(u.jsx)("div",{className:"logo",children:"Logo"}),Object(u.jsxs)("div",{className:"flex items-center px-2 py-1 space-x-8 ",children:[Object(u.jsxs)("p",{className:" px-2 hover:bg-blue-400 rounded",children:["workspace",Object(u.jsx)("button",{className:"px-1",children:"+"})]}),Object(u.jsx)("p",{children:"recent"}),Object(u.jsx)("p",{children:"more"})]})]})}}]),c}(n.Component),f=b,j=c(22),p=c(11),m=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.name,c=e.prefs,n=c.backgroundImage?"red":c.background;return Object(u.jsx)(i.b,{className:" h-20 w-1/5 inline-block cursor-pointer p-3  m-1  text-white",to:"/".concat(this.props.id),style:{backgroundColor:n},children:t})}}]),c}(n.Component),O=m,x=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.handleSubmit(n.state.boardName),n.props.closeModal()},n.closeModal=function(){n.props.closeModal()},n.state={boardName:""},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:" bg-black bg-opacity-70 absolute  top-0 h-1/5 w-1/5 flex  ",children:[Object(u.jsxs)("form",{onSubmit:this.handleSubmit,action:"",className:"flex flex-wrap items-center justify-around",children:[Object(u.jsx)("input",{className:"p-1 w-8/12 ",type:"text",name:"",id:"",value:this.state.boardName,onChange:function(t){e.setState({boardName:t.target.value})},placeholder:"Enter board name...."}),Object(u.jsx)("button",{className:"bg-blue-500 p-1 text-white my-3",children:"Create board"})]}),Object(u.jsx)("button",{onClick:this.closeModal,className:"absolute top-0 right-0 p-10 text-white",children:"x"})]})}}]),c}(n.Component),v=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).openModal=function(){n.setState({openModal:!0})},n.closeModal=function(){n.setState({openModal:!1})},n.updateData=function(e){fetch("https://api.trello.com/1/boards/?name=".concat(e,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){n.props.boardAdded(e)})).catch((function(e){return console.error(e)}))},n.createBoard=function(e){n.updateData(e)},n.state={openModal:!1},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{onClick:this.openModal,className:" bg-gray-300 h-20 w-1/5 inline-block cursor-pointer p-3  m-1 flex items-center justify-center text-gray-400",children:"create new board"}),this.state.openModal&&Object(u.jsx)(x,{closeModal:this.closeModal,handleSubmit:this.createBoard})]})}}]),c}(n.Component),k=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).updateData=function(){console.log("board data fetched"),fetch("https://api.trello.com/1/members/me/boards?fields=name,url,prefs&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n.setState({boards:e})})).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){n.updateData()},n.boardAdded=function(e){n.setState({boards:[].concat(Object(p.a)(n.state.boards),[e])})},n.state={boards:[]},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.boards.map((function(e){return Object(u.jsx)(O,Object(j.a)({},e),e.id)}));return Object(u.jsxs)("div",{className:" col-span-3  flex-column items-start px-4 ",children:[Object(u.jsx)("h1",{children:"Your work space boards"}),Object(u.jsx)("div",{className:"flex flex-wrap",children:e}),Object(u.jsx)(v,{boardAdded:this.boardAdded})]})}}]),c}(n.Component),g=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"grid grid-cols-4 container mx-auto p-4 my-3  h-96",children:[Object(u.jsx)("div",{className:"bg-green-500",children:"right"}),Object(u.jsx)(k,{})]})}}]),c}(n.Component),y=g,N=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("button",{className:"px-2 text-gray-500 ",children:" x"})}}]),c}(n.Component),C=N,S=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).deleteItem=function(){fetch("https://api.trello.com/1/checklists/".concat(e.props.checkListId,"/checkItems/").concat(e.props.checkItemId,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"DELETE"}).catch((function(e){return console.error(e)}))},e.handleDelete=function(){e.deleteItem(),e.props.handleDeleteItem(e.props.checkItemId)},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"mx-6 text-gray-700 hover:bg-gray-200 block w-1/2 rounded px-2 my-1 flex justify-between ",children:[Object(u.jsxs)("div",{className:" ",children:["+ ",this.props.itemName]}),Object(u.jsx)("div",{onClick:this.handleDelete,children:Object(u.jsx)(C,{})})]})}}]),c}(n.Component),D=S,I=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleDeleteItem=function(t){e.props.handleDeleteItem(t)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.props.checkListItems.map((function(t){return Object(u.jsx)(D,{itemName:t.name,checkListId:e.props.checkListId,checkItemId:t.id,handleDeleteItem:e.handleDeleteItem},t.id)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:t})})}}]),c}(n.Component),L=I,E=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).handleClose=function(){n.setState({isEditing:!1})},n.handleOpen=function(){n.setState({isEditing:!0})},n.updateData=function(e){fetch("https://api.trello.com/1/checklists/".concat(n.props.checkListId,"/checkItems?name=").concat(e,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return n.props.addItem(e)})).catch((function(e){return console.error(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.updateData(n.state.itemName),n.setState({itemName:""}),n.setState({isEditing:!1})},n.state={itemName:"",isEditing:!1},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:this.handleOpen,className:"bg-gray-200 text-gray-400 ml-3 p-1 rounded",children:"Add Item"})}),c=Object(u.jsx)("div",{className:"bg-gray-300 p-2 absolute",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,action:"",children:[Object(u.jsx)("input",{className:"p-1 rounded",type:"text",value:this.state.itemName,onChange:function(t){e.setState({itemName:t.target.value})}}),Object(u.jsxs)("div",{className:" mt-3 flex gap-3",children:[Object(u.jsx)("button",{className:"bg-blue-500 text-blue-200 px-2 rounded my-2 ",children:"Add Items"}),Object(u.jsx)("button",{className:"text-gray-600",onClick:this.handleClose,children:"X"})]})]})});return this.state.isEditing?c:t}}]),c}(n.Component),w=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"bg-gray-400  rounded px-2 ",children:"delete"})})}}]),c}(n.Component),A=w,M=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).fetchdata=function(){fetch("https://api.trello.com/1/checklists/".concat(n.props.checkList.id,"/checkItems?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n.setState({items:e})})).catch((function(e){return console.error(e)}))},n.deleteCheckList=function(e){fetch("https://api.trello.com/1/checklists/".concat(e,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"DELETE"}).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){n.fetchdata()},n.handleAddItem=function(e){n.setState({items:[].concat(Object(p.a)(n.state.items),[e])})},n.handleDelete=function(){n.deleteCheckList(n.props.checkList.id),n.props.handleDelete(n.props.checkList.id)},n.deleteItem=function(e){n.setState({items:n.state.items.filter((function(t){return t.id!==e}))})},n.state={items:[]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"flex items-center justify-between",children:[Object(u.jsxs)("h1",{className:" font-bold  m-3 ",children:[" + ",this.props.checkListName]}),Object(u.jsx)("div",{onClick:this.handleDelete,children:Object(u.jsx)(A,{})})]}),Object(u.jsx)(L,{checkListId:this.props.checkList.id,checkListItems:this.state.items,handleDeleteItem:this.deleteItem}),Object(u.jsx)(E,{checkListId:this.props.checkList.id,addItem:this.handleAddItem})]})}}]),c}(n.Component),T=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).updateData=function(e){return fetch("https://api.trello.com/1/checklists/".concat(e,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){n.props.checkListIds.forEach((function(e){n.updateData(e).then((function(e){n.setState({checklistsData:[].concat(Object(p.a)(n.state.checklistsData),[e])})}))}))},n.componentDidUpdate=function(e){e.addCheckListdata.id!==n.props.addCheckListdata.id&&n.setState({checklistsData:[].concat(Object(p.a)(n.state.checklistsData),[n.props.addCheckListdata])})},n.deleteCheckList=function(e){n.setState({checklistsData:n.state.checklistsData.filter((function(t){return t.id!==e}))})},n.state={checklistsData:[]},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.checklistsData.map((function(t){return Object(u.jsx)(M,{checkListName:t.name,checkList:t,handleDelete:e.deleteCheckList},t.id)}));return Object(u.jsx)("div",{children:t})}}]),c}(n.Component),U=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).updatedata=function(e){fetch("https://api.trello.com/1/checklists?name=".concat(e,"&idCard=").concat(n.props.cardId,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){n.props.handleAddCheckList(e)})).catch((function(e){return console.error(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.updatedata(n.state.value),n.setState({isEditing:!1,value:""})},n.state={value:"",isEditing:!1},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{onClick:function(){return e.setState({isEditing:!0})},children:"Check list"}),this.state.isEditing&&Object(u.jsx)("div",{className:"absolute bg-gray-400 bg-opacity-20 p-2",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"flex-col p-2 ",action:"",children:[Object(u.jsx)("input",{className:"block p-2",type:"text",name:"",id:"",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),Object(u.jsxs)("span",{className:"flex items-center gap-4 m-2",children:[Object(u.jsxs)("button",{className:"bg-blue-500 px-1 my-2 py-2 rounded ",children:["Add Checklist"," "]}),Object(u.jsx)("p",{onClick:function(){return e.setState({isEditing:!1})},className:"text-xl hover:bg-gray-200 rounded-xl p-2 text-gray-500",children:"X"})]})]})})]})}}]),c}(n.Component),P=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).handleClose=function(){n.props.handleClose()},n.handleAddCheckList=function(e){n.setState({addCheckListdata:e})},n.state={addCheckListdata:[]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:" bg-black bg-opacity-50 absolute inset-0 h-full flex items-center justify-center ",id:"overlay",children:Object(u.jsxs)("div",{className:"bg-white  relative grid grid-cols-2 gap-8 w-5/12 p-20",children:[Object(u.jsxs)("div",{className:"col-span-1",children:[Object(u.jsx)("h1",{className:"text-bold",children:this.props.name}),Object(u.jsxs)("p",{className:"text-gray-500",children:["in list",Object(u.jsx)("span",{className:"italic underline ",children:this.props.listName})]}),Object(u.jsx)("div",{children:Object(u.jsx)(T,{addCheckListdata:this.state.addCheckListdata,checkListIds:this.props.checkListIds})})]}),Object(u.jsxs)("div",{className:"col-span-1",children:[Object(u.jsx)("h1",{children:"Add to card"}),Object(u.jsx)("div",{className:" cursor-pointer rounded  bg-gray-300 my-3 p-1",children:Object(u.jsx)(U,{cardId:this.props.cardId,handleAddCheckList:this.handleAddCheckList})})]}),Object(u.jsx)("button",{onClick:this.handleClose,className:"absolute top-0 right-0 p-10",children:"x"})]})})}}]),c}(n.Component),G=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).openModal=function(e){n.setState({openModal:!0})},n.CloseModal=function(){n.setState({openModal:!1})},n.deletecard=function(){fetch("https://api.trello.com/1/cards/".concat(n.props.card.id,"?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"DELETE"}).catch((function(e){return console.error(e)}))},n.handleDelete=function(e){e.stopPropagation(),n.deletecard(),n.props.handleDelete(n.props.card.id)},n.state={openModal:!1},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.card.name;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{onClick:this.openModal,className:"bg-white hover:bg-gray-100 shadow rounded w-11/12 p-1 my-2",children:Object(u.jsxs)("div",{className:"flex justify-between",children:[Object(u.jsx)("p",{children:e}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:this.handleDelete,className:"px-2 text-gray-500 ",children:[" ","x"]})})]})}),this.state.openModal&&Object(u.jsx)(P,{handleClose:this.CloseModal,name:e,listName:this.props.listName,checkListIds:this.props.card.idChecklists,cardId:this.props.card.id})]})}}]),c}(n.Component),B=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).handleEdit=function(){n.setState({isEditing:!0})},n.closeEditing=function(){n.setState({isEditing:!1})},n.updatedata=function(){""!==n.state.cardName&&fetch("https://api.trello.com/1/cards?name=".concat(n.state.cardName,"&idList=").concat(n.props.listId,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){n.props.cardAdded(e)})).catch((function(e){return console.error(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.updatedata(),n.setState({isEditing:!1,cardName:""})},n.state={isEditing:!1,cardName:""},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return this.state.isEditing?Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"flex-col inline-block my-2",onSubmit:this.handleSubmit,action:"",children:[Object(u.jsx)("input",{className:"p-2 h-20 mb-4 shadow-md ",type:"text",name:"",id:"",value:this.state.cardName,onChange:function(t){e.setState({cardName:t.target.value})}}),Object(u.jsxs)("div",{className:" flex gap-5 ",children:[Object(u.jsx)("button",{className:"bg-blue-500 p-2 text-blue-200 rounded",children:"ADD card"}),Object(u.jsx)("button",{onClick:this.closeEditing,className:"text-gray-400 text-4xl p-1",children:"x"})]})]})}):Object(u.jsx)("div",{onClick:this.handleEdit,children:Object(u.jsxs)("p",{className:" hover:bg-gray-300 cursor-pointer rounded w-11/12 p-1  text-gray-400 my-2",children:[" ","+ Add card"]})})}}]),c}(n.Component),F=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("button",{className:"bg-gray-400  rounded px-2 ",children:"delete"})}}]),c}(n.Component),X=F,J=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).UpdateData=function(){fetch("https://api.trello.com/1/lists/".concat(n.props.list.id,"/cards?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({cards:e})})).catch((function(e){return console.error(e)}))},n.deleteList=function(){fetch("https://api.trello.com/1/lists/".concat(n.props.list.id,"/closed?value=true&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"PUT"}).catch((function(e){return console.error(e)}))},n.handleDelete=function(){n.deleteList(),n.props.handleDeleteList(n.props.list.id)},n.cardAdded=function(e){n.setState({cards:[].concat(Object(p.a)(n.state.cards),[e])})},n.deleteCard=function(e){n.setState({cards:n.state.cards.filter((function(t){return t.id!==e}))})},n.state={cards:[]},n}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.UpdateData()}},{key:"render",value:function(){var e=this,t=this.props.list.name,c=this.state.cards.map((function(c){return Object(u.jsx)(G,{card:c,listName:t,handleDelete:e.deleteCard},c.id)}));return Object(u.jsxs)("div",{className:"bg-gray-200 shadow flex-shrink-0 flex-column w-72 m-5 pl-4 pb-3 pt-3",children:[Object(u.jsxs)("div",{className:"flex justify-between",children:[Object(u.jsxs)("div",{className:"font-bold",children:[t," "]}),Object(u.jsx)("div",{onClick:this.handleDelete,children:Object(u.jsx)(X,{})})]}),c,Object(u.jsx)(B,{listId:this.props.list.id,cardAdded:this.cardAdded})]})}}]),c}(n.Component),Y=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).handleEdit=function(){n.setState({isEditing:!0})},n.handleCloseEdit=function(){n.setState({isEditing:!1})},n.updateList=function(){fetch("https://api.trello.com/1/lists?name=".concat(n.state.listName,"&pos=bottom&idBoard=").concat(n.props.boardId,"&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return n.props.handleAddList(e)})).catch((function(e){return console.error(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.updateList(),n.setState({listName:""})},n.state={isEditing:!0,listName:""},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return this.state.isEditing?Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"bg-gray-300 w-72 m-5 pl-4 p-3",action:"",children:[Object(u.jsx)("input",{className:"inline-block h-8 p-2",type:"text",placeholder:"Add a new list ",value:this.state.listName,onChange:function(t){return e.setState({listName:t.target.value})}}),Object(u.jsxs)("div",{className:"flex items-center gap-5 ",children:[Object(u.jsx)("button",{className:"bg-blue-500 px-4 py-1 mt-2 rounded-md ",children:"Add"}),Object(u.jsx)("p",{onClick:this.handleCloseEdit,className:"text-gray-500 cursor-pointer text-xl p-1 flex ",children:"X"})]})]}):Object(u.jsx)("div",{onClick:this.handleEdit,className:"bg-black hover:bg-gray-300 cursor-pointer bg-opacity-5 text-gray-500 shadow  w-72 m-5 pl-4 p-3 ",children:"+ add list"})}}]),c}(n.Component),q=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).UpdateData=function(){fetch("https://api.trello.com/1/boards/".concat(n.props.boardId,"/lists?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({lists:e,loading:!1})})).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){n.UpdateData()},n.componentDidUpdate=function(e){e.boardId!==n.props.boardId&&n.UpdateData()},n.addList=function(e){n.setState({lists:[].concat(Object(p.a)(n.state.lists),[e])})},n.deleteList=function(e){n.setState({lists:n.state.lists.filter((function(t){return t.id!==e}))})},n.state={lists:[],loading:!0},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.lists.map((function(t){return Object(u.jsx)(J,{let:!0,list:t,handleDeleteList:e.deleteList},t.id)}));return this.state.loading?Object(u.jsx)("div",{children:"Loading....."}):Object(u.jsxs)("div",{className:"flex items-start",children:[Object(u.jsx)("div",{className:"flex items-start",children:t}),Object(u.jsx)(Y,{boardId:this.props.boardId,handleAddList:this.addList})]})}}]),c}(n.Component),z=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={boardId:"",isClicked:!1},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{}),Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)(y,{})}}),Object(u.jsx)(h.a,{exact:!0,path:"/:id",component:function(e){return Object(u.jsx)(q,{boardId:e.match.params.id})}})]})]})}}]),c}(n.Component);s.a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.06063469.chunk.js.map