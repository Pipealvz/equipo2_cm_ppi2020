function autocopy (){
    const input = document.querySelector('i.Footer_gmail');
    const button = document.querySelector('.footer_gmail_texto')
    
    input.addEventListener('click',() => {
        button.focus();
        document.execCommand('copy',this.props.value)
    })
}
export default autocopy;