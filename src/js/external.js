class External {
    constructor(player) {
        this.player = player;
        this.shown = false;

        // 点击阴影关闭
        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });

        // 点击按钮显示菜单
        this.player.template.externalButton.addEventListener('click', () => {
            this.show();
        });

        // 每个菜单项的监听事件
        Array.prototype.slice.call(this.player.template.externalBoxItem).forEach((item, index) => {
            if (this.player.options.external[index].click) {
                item.addEventListener('click', () => {
                    this.player.options.external[index].click(this.player);
                    this.hide();
                });
            }
        });
    }
    hide() {
        this.player.template.externalBox.classList.remove('dplayer-external-box-open');
        this.player.template.mask.classList.remove('dplayer-mask-show');
    }

    show() {
        this.player.template.externalBox.classList.add('dplayer-external-box-open');
        this.player.template.mask.classList.add('dplayer-mask-show');
    }
}

export default External;
