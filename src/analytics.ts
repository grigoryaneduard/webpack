import * as $ from 'jquery';

function createAnalytics(): object {
    let counter = 0;
    let destroy: boolean = false;
    const listener = () => counter++;

    $(document).on('click', listener);

    return {
        destroy() {
            $(document).off('click', listener);
            destroy = true;
        },
        getClicks() {
            if (destroy) {
                return  'Analytics is destroyed: new changes';
            }

            return counter;
        }
    }
}

window['analytics'] = createAnalytics();
