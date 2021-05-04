import { LightningElement, api } from 'lwc';

export default class PlainDndItem extends LightningElement {
    @api task;

    itemDragStart(evt) {
        const event = new CustomEvent('itemdragstart', {
            detail: this.task.taskid
        });

        this.dispatchEvent(event);
    }
}