// Theme initialization - must run before DOM loads to prevent flash of wrong theme
(function(){
  try{
    var t=localStorage.getItem('nm-theme')||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');
    document.documentElement.setAttribute('data-theme',t);
  }catch(e){}
})();
