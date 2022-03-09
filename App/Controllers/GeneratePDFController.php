<?php

namespace App\Controllers;

use TCPDF;
use App\Controller;
use App\Models\Sale;
use Carbon\Carbon;

class GeneratePDFController extends Controller
{
    public function generate($id)
    {
        $sale = Sale::find($id);
        $invoice = $sale->id_sale;
        $amount_tax = number_format((($sale->net * $sale->tax) / 100), 2);
        $total_sale = number_format($sale->total, 2);

        $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
        $pdf->SetCreator(PDF_CREATOR);
        $pdf->SetAuthor('Pos System');
        $pdf->SetTitle("Invoice $invoice");
        $pdf->SetSubject('Invoice Customer');

        $pdf->startPageGroup();
        $pdf->AddPage();
        
        $block1 = <<<EOF
        <table>
            <tr>
                <td>
                    <div style="width: 140px; vertical-align: middle;">
                        <img src="/assets/images/logo1.png" style="width:150px;"/>
                    </div>
                </td>
                <td style="background-color: white; width: 140px; vertical-align: middle;">
                    <div style="font-size: 8.5px; text-align: center; line-height: 15px;">
                        <span>Rif: ######### </span>
                        <br/>
                        <span>Address: ######### </span>
                    </div>
                </td>
                <td style="background-color:white; width: 140px; vertical-align: middle;">
                    <div style="font-size: 8.5px; text-align: center; line-height: 15px;">
                        <span>Phone: (00)-000-000-00-00</span>
                        <span>Email: email@email.com</span>
                    </div>
                </td>
                <td style="background-color: white; width: 110px; vertical-align: middle;">
                        <div style="font-size: 14px; line-height: 20px; text-align:center; color: red;">
                        <span>Invoice #</span>
                        <span>$invoice</span>
                    </div>
                </td>
            </tr>
        
        </table>
        EOF;

        $pdf->writeHTML($block1, false, false, true, false, '');

        $block2 = <<<EOF
        <table>
            <tr>
                <td style="width:540px"><img src="/assets/images/tcpdf/back.jpg"/></td>
            </tr>
        </table>
        <table style="font-size: 10px; padding:5px 10px;">
            <tr>
                <td style="border: 1px solid #666; background-color: white; width: 390px;">
                    Customer: {$sale->customer->name}
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 150; text-align: center">
                    Date: {$sale->created_at->format('Y-m-d')   }
                </td>
            </tr>
            <tr>
            <td style="border: 1px solid #666; background-color: white; width: 540; text-align: left">
                Seller: {$sale->seller->name}
            </td>
            </tr>
            <tr>
                <td style="width:540px"></td>
            </tr>
        </table>
        EOF;

        $pdf->writeHTML($block2, false, false, true, false, '');

        $block3 = <<<EOF
        <table style="font-size: 10px; padding:5px 10px;">
            <tr>
                <td style="border: 1px solid #666; background-color: white; width: 260px; text-align: center">
                    Product
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 80px; text-align: center">
                    Quantity
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    Unit price
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    Total
                </td>
            </tr>
        </table>
        EOF;

        $pdf->writeHTML($block3, false, false, true, false, '');

        foreach($sale->products as $index => $product){
            $price = number_format($product->price, 2);
            $total_net = number_format($product->price * $product->pivot->quantity, 2);
            $block4 = <<<EOF
            <table style="font-size: 10px; padding:5px 10px;">
                <tr>
                    <td style="border: 1px solid #666; background-color: white; width: 260px; text-align: center">
                        $product->name
                    </td>
                    <td style="border: 1px solid #666; background-color: white; width: 80px; text-align: center">
                        {$product->pivot->quantity}
                    </td>
                    <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                        $ $price
                    </td>
                    <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                        $ $total_net
                    </td>
                </tr>
            </table>
            EOF;

            $pdf->writeHTML($block4, false, false, true, false, '');
        }

        $block5 = <<<EOF
        <table style="font-size: 10px; padding:5px 10px;">
            <tr>
                <td style="width:540px"></td>
            </tr>
            <tr>
                <td style="background-color: white; width: 260px; text-align: center">
                </td>
                <td style="border-right: 1px solid #666; background-color: white; width: 80px; text-align: center">
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    Sub Total:
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    $ $sale->net
                </td>
            </tr>
            <tr>
                <td style="background-color: white; width: 260px; text-align: center">
                </td>
                <td style="border-right: 1px solid #666; background-color: white; width: 80px; text-align: center">
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    Tax $sale->tax%:
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    $ $amount_tax
                </td>
            </tr>
            <tr>
                <td style="background-color: white; width: 260px; text-align: center">
                </td>
                <td style="border-right: 1px solid #666; background-color: white; width: 80px; text-align: center">
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    Total:
                </td>
                <td style="border: 1px solid #666; background-color: white; width: 100px; text-align: center">
                    $ $total_sale
                </td>
            </tr>
        </table>
        EOF;
        
        $pdf->writeHTML($block5, false, false, true, false, '');



        $pdf->Output("invoice-$invoice.pdf");

    }
}