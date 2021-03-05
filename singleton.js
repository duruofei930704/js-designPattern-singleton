const Singleton = (function(){
  function processManager(){
    this.numProcess = 0;
  }
  let pManager=“”;
  function createProcessManaged(){
    pManager = new processManager();
  }
  return{
    getProcessManager: ()=>{
      if(!pManager){
        createProcessManaged();
      }
      return pManager;
    }
  }
})()
p1 = Singleton.getProcessManager();
p2 = Singleton.getProcessManager();
console.log(p1 === p2);