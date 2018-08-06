import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


class AOCStarterPack extends Component {



    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: '20px' }}>
                    <h1>Congratulations... You just executed your first smart contract</h1>

                    <p>The video below will show you how to explore
                        <a href="https://etherscan.io/" target="_blank">https://etherscan.io/ </a>.
                         (one of Ethereums Blockchain Explorers) and allow you to trace in real time where the .1 ETH you just sent went from bank account to bank account.</p>

                    <p></p>



                    <div className="intrinsic-container intrinsic-container-16x9">
                        <iframe src="https://www.youtube.com/embed/1qohnyp74zA"></iframe>
                    </div>

                

                    <h1>How to secure your tokens</h1>
                    <p>blah blah blah</p>
                </div>
            </div>
        )
    }
}
export default AOCStarterPack;