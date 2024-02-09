import React from 'react';
import Header from '../components/header/header';
import Image from 'next/image';
import arrow from "../../../public/arrow.svg";
import Footer from '../components/footer/footer';



const Refund = () => {
    
  return (
    <>
        <div>
            <Header/>
            <div className='mt-40  mx-auto w-[75%]'>
            <div className='space-y-3'>
            <p className='text-[45px] 2xl:text-[40px] flex justify-center'>Refund Policy</p>
            <p className=' text-[20px] 2xl:text-[24px] font-semibold'>Website refund policy https://misaparis.com</p>
            <p className='2xl:text-[22px] font-medium'>ARTICLE 1. RETURNS</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>You can return your item for free if you are not completely satisfied. Please note that this guarantee only applies to products purchased on the site https://misaparis.com and returns are limited to France. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>We do not exchange returned products but you can obtain a full refund of your initial order if the return deadline is respected. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Please also note that for makeup products, we try to represent our shades as accurately as possible. However, the colors you see may vary slightly from one screen to another. </p>
            <p className='2xl:text-[22px] font-medium'>ARTICLE 2. DEFINITIONS</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> CUSTOMER: any person, natural or legal, under private or public law, registered on the Site.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>SITE CONTENT : elements of any kind published on the Site, whether or not protected by intellectual property rights, such as texts, images, designs, presentations, videos, diagrams, structures, databases or software. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> THE EDITOR: MisaParis, CEO in his capacity as publisher of the Site.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> INTERNET USER: any person, natural or legal, under private or public law, connecting to the Site.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> PRODUCT: goods of any kind sold on the Site by the Publisher to Customers.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>SITE: website accessible at the URL https://misaparismaquillage.com , as well as the subsites, mirror sites, portals and URL variations relating thereto.</p>
            <p className='2xl:text-[22px] font-medium'>ARTICLE 3. SCOPE OF APPLICATION</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The Site is freely accessible to all Internet users. Browsing the Site implies acceptance by any Internet user of these general conditions. Simply connecting to the Site, by any means whatsoever, in particular via a robot or a browser, will constitute full acceptance of these general conditions. When registering on the Site, this acceptance will be confirmed by checking the corresponding box.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The Internet user acknowledges having read them fully and accepting them without restriction. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Checking the above-mentioned box will be deemed to have the same value as a handwritten signature from the Internet user. The Internet user recognizes the evidentiary value of the Publishers automatic recording systems and, unless he provides proof to the contrary, he waives the right to contest them in the event of a dispute.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>These general conditions are applicable to relations between the parties to the exclusion of all other conditions, and in particular those of the Internet user. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Acceptance of these general conditions assumes on the part of Internet users that they have the necessary legal capacity for this, or failing that they have the authorization of a guardian or curator if they are incapable. , their legal representative if they are minors, or that they hold a mandate if they act on behalf of a legal entity.</p>
            <p className='2xl:text-[22px] font-medium'>ARTICLE 4.PURPOSE  OF THE SITE</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The purpose of the Site is the sale of Products to Customers.</p>
            <p className='2xl:text-[22px] font-medium'>ARTICLE 5.ORDER STEPS</p>
            <p className='2xl:text-[22px] font-medium'>ORDER</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>In order to place an order, Internet Users will be able to select one or more Products and add them to their basket. The availability of Products is indicated on the Site, in the description sheet of each item. When their order is complete, they will be able to access their basket by clicking on the button provided for this purpose.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>By consulting their basket, Internet Users will be able to check the number and nature of the Products they have chosen and will be able to check their unit price, as well as their overall price. They will have the possibility to remove one or more Products from their basket. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>If their order suits them, Internet users will be able to validate it. They will then access a form on which they can either enter their connection details if they already have them, or register on the Site by completing the registration form using their personal information.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>As soon as they are connected or after they have completely completed the registration form, Customers will be invited to check or modify their delivery and billing details, then will be invited to make their payment by being redirected for this purpose on the secure payment interface including the words “order with payment obligation” or any similar formula. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Once payment has actually been received by the Publisher, the latter undertakes to acknowledge receipt of it to the Customer electronically, within a maximum period of 24 hours. Within the same period, the Publisher undertakes to send the Customer an email summarizing the order and confirming the processing, including all the related information.</p>
            <p className='2xl:text-[22px] font-medium'>ARTICLE 6.PRICE PAYMENT</p>
            <p>PRICE</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The applicable prices are those displayed on the Site on the day of the order. These prices may be modified at any time by the Publisher. The prices displayed are only valid on the day of the order and do not apply for the future.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The prices indicated on the Site are in euros, all taxes included, excluding delivery costs.</p>
            <p className='2xl:text-[22px] font-medium'>PAYMENT TERMS</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The Customer can make payment by Bank Card. Payments by credit card are made using secure transactions provided by stripe.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>In the context of payments by bank card, the Publisher does not have access to any data relating to the Customers means of payment. Payment is made directly into the hands of the banking establishment.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>In the event of payment by money order, check or bank transfer, delivery times only begin to run from the date the payment is received by the Publisher.</p>
            <p className='2xl:text-[22px] font-medium'>BILLING</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The Publisher will send or make available to the Customer an invoice electronically after each payment. The Customer expressly agrees to receive invoices electronically.</p>
            <p className='2xl:text-[22px] font-medium'>FAILURE TO PAY</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Agreed payment dates cannot be delayed under any circumstances, including in the event of a dispute.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Any sum not paid on the due date will give rise, automatically and without formal notice, to the application of late payment penalties calculated on the basis of a rate equal to 3 times the legal interest rate, without this penalty affects the payment of the sums due in principal.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> or by post to the address indicated in article 1 of these general conditions. In these last two cases, the Publisher undertakes to provide a response within 2 working days. </p>
            <p className='2xl:text-[22px] font-medium'>ARTICLE 7.COMPLAINT-WITHDRAWL-GUARANTEE</p>
            <p className='2xl:text-[22px] font-medium'>CUSTOMER SERVICE</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The service is accessible from Monday to Friday from 9:00 a.m. to 7:00 p.m. at the WhatsApp telephone number: 0677733253, by email to: customer service </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> or by post to the address indicated in article 1 of these general conditions. In these last two cases, the Publisher undertakes to provide a response within 2 working days. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The Sites customer service is accessible from the sites contact page: or by email to or by post to the address indicated in article 1 of these general conditions.</p>
            <p>RIGHT TO WITHDRAWL-DISTANCE SELLING</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>This article 7.2 is applicable to the Customer who has the status of consumer within the meaning of the introductory article of the Consumer Code.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>In accordance with the legislation in force regarding distance selling, the Customer has a period of fourteen clear days to exercise his right of withdrawal without having to justify reasons or pay penalties, with the exception, where applicable , return costs. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The period mentioned in the preceding paragraph runs from the day on which the distance contract is concluded for contracts relating to the provision of a service and/or the supply of digital content not provided on a medium material, or from receipt of the goods by the Customer or a third party, other than the carrier, designated by him, for contracts for the sale of goods and contracts for the provision of services including the delivery of goods.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The decision to withdraw must be notified to the Publisher using the contact details indicated in Article 1 of these general conditions by means of an unambiguous declaration. The Customer has, for example, the possibility of using the standard form provided at the end of these general conditions. In any event, the Publisher will send the Client an acknowledgment of receipt of said withdrawal by email as soon as possible.</p>
            <p className='2xl:text-[22px] font-medium'>EFFECTS OF THE RIGHT TO WITHDRAWL</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The Customer returns or returns the products to the professional or any person designated by the latter, without undue delay and, at the latest, within fourteen days following communication of his decision to withdraw.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>When the right of withdrawal is exercised, the professional is required to reimburse the Customer for all sums paid, as soon as possible and at the latest within fourteen days following the date on which this right was exercised. If applicable, the professional may defer reimbursement until recovery of the Products or until the Customer has provided proof of shipment of the Products, whichever is earlier. Beyond this, the amount due is, automatically, productive of interest at the legal rate in force, as specified in article L. 242-4 of the Consumer Code. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The Customers liability is only incurred with regard to the depreciation of the Product resulting from manipulations other than those necessary to establish the nature, characteristics and proper functioning of this Product.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The conditions, deadlines and methods for exercising the right of withdrawal are set out in the standard form provided at the end of these general conditions.</p>
            <p className='2xl:text-[22px] font-medium'>EXECUSION OF THE RIGHT WITHDRAWL</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The right of withdrawal does not apply, in particular, to contracts:</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>for the provision of services fully executed before the end of the withdrawal period and the execution of which has started after express prior agreement of the Customer and express waiver of his right of withdrawal;</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>the supply of goods made to the Customers specifications or clearly personalized;</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Likewise, the right of withdrawal is not applicable to contracts executed in full by both parties at the express request of the Customer before the latter exercises his right of withdrawal.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> When validating the order for digital content independent of any material support before the withdrawal period has expired, the Customers waiver of the right of withdrawal will be manifested by checking the box corresponding to the following sentence: </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> The Customer will then receive confirmation by email of their waiver of the right of withdrawal.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> When validating the order for a service, the Customers waiver of the right of withdrawal will be demonstrated by checking the box corresponding to the following sentence: </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>I expressly waive my 14-day right of withdrawal for the services from which I would benefit before the end of this period. </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'> The Customer will then receive confirmation by email of their waiver of the right of withdrawal.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The conditions, deadlines and methods for exercising the right of withdrawal are set out in the standard form provided at the end of these general conditions.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Termination of the contract on the initiative of the Client</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>The consumer Customer may terminate the contract by registered letter with acknowledgment of receipt if the delivery date of the goods exceeds seven days. The Customer will then be reimbursed for the sums incurred by him when ordering.</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>This clause is not intended to apply if the delivery delay is due to a case of force majeure. In such a case, the Customer undertakes not to take legal action against the Publisher and waives the right to avail itself of the cancellation of the sale provided for in this article.</p>
            <p className='2xl:text-[22px] font-medium'>GUARANTEE</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>It is up to the Customer to check the good condition of the Products at the time of delivery. This verification must relate in particular to the quality, quantities and references of the Products as well as their conformity to the order. No complaints will be taken into account after a period of three days from delivery. In any case, any complaint concerning the delivered packages will only be taken into account if the Customer having the status of merchant has expressed reservations to the carrier in accordance with articles L. 133-3 et seq. of the Commercial Code</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Customers who are consumers also have a legal guarantee of conformity (articles L. 217-4 et seq. Consumer Code). </p>
            <p className='2xl:text-[22px] font-medium'>DISPUTES</p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Pursuant to Ordinance No. 2015-1033 of August 20, 2015, all disputes with a consumer Customer which may arise in the context of the execution of these general conditions and for which a solution cannot be found prior to the amicable agreement between the parties must be submitted to Medicys: </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Pursuant to Ordinance No. 2015-1033 of August 20, 2015, all disputes with a consumer Customer which may arise in the context of the execution of these general conditions and for which a solution cannot be found prior to the amicable agreement between the parties must be submitted to Medicys: </p>
            <p className='2xl:text-[18px] text-[14px] opacity-50'>Any dispute relating to this contract or in connection with it will be settled by arbitration in accordance with the regulations of the Digital Institute of Arbitration and Mediation </p>
            

            </div>


            </div>
            <div className='flex flex-col items-center m-10 relative'>
    <p className='text-[35px] font-semibold'>Subscribe to our newsletter</p>
    <div className="relative w-[30%]">
        <input
            className="m-4 w-full border rounded-2xl border-[#BABABA] bg-[#F5F5F5] px-2 py-2 text-black placeholder-gray"
            type="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
        />
        <Image
            id="view1"
            src={arrow}
            alt="Right Arrow"
            className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 w-10 sm:w-5"
        />
    </div>

</div>
<hr className='mt-4'/>
<Footer/>

        </div>
    </>
  )
}

export default Refund