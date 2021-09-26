import  { Component, Prop, h } from  '@stencil/core';

@Component({
  tag: 'custom-number-input-element',
  styleUrl: 'custom-number-input-element.css',
})
export class CustomNumberInputElement  {
  @Prop() name: string

  @Prop({ mutable: true }) type: string = 'text';

  @Prop() disabled: boolean = false;

  @Prop() readonly: boolean = false;

  @Prop({ mutable: true }) value: string|number = '0';

  @Prop() class: string;

  isEditMode(evt) {
    console.log('isEditMode')
    const value = evt.target.value
    this.type = 'number'

    const numericOnly = value && value.replace(/[^\d.-]/g,'') || 0
    const numberValue = numericOnly && numericOnly.replace(/,/g,'') || 0
    this.value = Number(numberValue)
  }

  isViewMode(evt) {
    console.log('isViewMode')
    const value = evt.target.value
    this.type = 'text'

    const numericOnly = value && value.replace(/[^\d.-]/g,'') || 0
    const numberValue = numericOnly && numericOnly.replace(/,/g,'') || 0
    this.value = Number(numberValue).toLocaleString()
  }

  // connectedCallback() {
  //   console.log('connectedCallback')
  // }
  //
  // disconnectedCallback() {
  //   console.log('disconnectedCallback')
  // }

  render() {
    return (
      <input
        class={this.class}
        type={this.type}
        name={this.name}
        readonly={this.readonly}
        disabled={this.disabled}
        onBlur={this.isViewMode}
        onFocus={this.isEditMode}  />
    )
  }
}
