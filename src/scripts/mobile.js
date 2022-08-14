function resizeMainArea(sbcaClasses, sidebarLargeClasses, sidebarSmallClasses) {
    document.getElementById('sbca').className = sbcaClasses;
    document.getElementById('sidebar-large').className = sidebarLargeClasses;
    document.getElementById('sidebar-small').className = sidebarSmallClasses;
}

exports.resizingAbility = () => {
    if (window.innerWidth <= 720) resizeMainArea('col sbca', 'col-3 none', 'row mt-5');
    else resizeMainArea('col-9 sbca', 'col-3', 'row mt-5 none');
}