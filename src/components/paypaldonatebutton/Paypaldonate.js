import React from 'react'

function Paypaldonate() {
    return (
        <div>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="SAN7KZGDJR9BG" />
                <input type="image" src="https://www.caseconverteronlinetool.com/paypal-donate-button-2.png" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form>

        </div>
    )
}

export default Paypaldonate
