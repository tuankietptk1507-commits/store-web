const heroContainer = document.getElementById('hero-section');
const heroApps = appsData.filter(app => app.isHero).slice(0, 4);
if (heroContainer && heroApps.length === 4) {
    heroContainer.innerHTML = `
        <div class="section1-left">
            <div class="section1-content">
                <div class="section1-content-tittle">
                    <p class="section1-content-tittle-top">${heroApps[0].title}</p>
                    <p class="section1-content-tittle-text">${heroApps[0].author}</p>
                </div>
                <a href="../detail/detail.html?id=${heroApps[0].id}" class="section1-content-dowload">Tải xuống</a>
            </div>
            <img src="${heroApps[0].img}">
        </div>
        <div class="section1-right">
            <div class="section1-right-top">
                <div class="section1-content">
                    <div class="section1-content-tittle">
                        <p class="section1-content-tittle-top">${heroApps[1].title}</p>
                        <p class="section1-content-tittle-text">${heroApps[1].author}</p>
                    </div>
                    <a href="../detail/detail.html?id=${heroApps[1].id}" class="section1-content-dowload">Tải xuống</a>
                </div>
                <img src="${heroApps[1].img}">
            </div>
            <div class="section1-right-bottom">
                <div class="section1-right-bottom-in">
                    <div class="section1-content">
                        <div class="section1-content-tittle">
                            <p class="section1-content-tittle-top">${heroApps[2].title}</p>
                            <p class="section1-content-tittle-text">${heroApps[2].author}</p>
                        </div>
                        <a href="../detail/detail.html?id=${heroApps[2].id}" class="section1-content-dowload">Tải xuống</a>
                    </div>
                    <img src="${heroApps[2].img}">
                </div>
                <div class="section1-right-bottom-in">
                    <div class="section1-content">
                        <div class="section1-content-tittle">
                            <p class="section1-content-tittle-top">${heroApps[3].title}</p>
                            <p class="section1-content-tittle-text">${heroApps[3].author}</p>
                        </div>
                        <a href="../detail/detail.html?id=${heroApps[3].id}" class="section1-content-dowload">Tải xuống</a>
                    </div>
                    <img src="${heroApps[3].img}">
                </div>
            </div>
        </div>
    `;
}




function generateAppCard(app) {
    return `
        <div class="section-list-item">
            <div class="section-list-item-img"><img src="${app.img}"></div>
            <div class="section-list-item-content">
                <div class="section-list-item-content-left">
                    <p class="section-list-item-content-left-tittle">${app.title}</p>
                    <p class="section-list-item-content-left-text">${app.author} | v${app.version}</p>
                </div>
                <div class="section-list-item-content-right">
                    <a href="../detail/detail.html?id=${app.id}" class="section-list-item-content-right-btn">Tải xuống</a>
                </div>
            </div>
        </div>
    `;
}



const seeMoreContainer = document.getElementById('see-more-apps');
const popularContainer = document.getElementById('popular-apps');
const normalApps = appsData.filter(app => !app.isHero);
if (seeMoreContainer) {
    let html = '';
    normalApps.forEach(app => html += generateAppCard(app));
    seeMoreContainer.innerHTML = html;
}
if (popularContainer) {
    let html = '';
    const popularApps = appsData.filter(app => app.isPopular && !app.isHero);
    const appsToRender = popularApps.length > 0 ? popularApps : normalApps;
    
    appsToRender.forEach(app => html += generateAppCard(app));
    popularContainer.innerHTML = html;
}




const newAppsContainer = document.getElementById('new-apps');
if (newAppsContainer) {
    let html = '';
    const newApps = appsData.filter(app => app.isNew && !app.isHero);
    const appsToRender = newApps.length > 0 ? newApps : normalApps;
    for (let i = 0; i < appsToRender.length; i += 3) {
        let appGroup = appsToRender.slice(i, i + 3); 
        html += `<div class="section3-list-container-col">`;
        appGroup.forEach(app => {
            html += `
                <a href="../detail/detail.html?id=${app.id}" class="section3-list-container-col-item">
                    <img src="${app.img}">
                    <div class="section3-list-container-col-item-content">
                        <p class="section3-list-container-col-item-content-tittle">${app.title}</p>
                        <p class="section3-list-container-col-item-content-text">${app.author}</p>
                        <p class="section3-list-container-col-item-content-pb">Phiên bản: ${app.version}</p>
                    </div>
                </a>
            `;
        });
        html += `</div>`;
    }
    newAppsContainer.innerHTML = html;
}