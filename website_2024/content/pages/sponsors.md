Title: Sponsors
Slug: sponsors
Summary: PyCon supporters
Lang: en
page_number: 21


<style>
@media only screen and (max-width: 800px) {
    .sp-level {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 550px) {
    .sp-level {
        grid-template-columns: repeat(1, 1fr);
    }
}

.sp-square {
    min-height: 175px;
    border-radius: 16px;
    border: 0.806px solid #DADADA;
    background: #fff;
    box-shadow: 0px 3px 16px 0px rgba(136, 136, 136, 0.35) inset;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.sp-description {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding: 25px;
    height: calc(100% - 50px);
    width: calc(100% - 50px);
    overflow: auto;
}

.sp-square.with-description:hover .sp-logo {
    opacity: 0;
}

.sp-square.with-description:hover .sp-description {
    opacity: 1;
}

.sp-level {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
}

@media only screen and (max-width: 800px) {
    .sp-level {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 550px) {
    .sp-level {
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>

Something about something.

Another something.

<br>

<div class="sp-level">
<a href="https://developer.nvidia.com" class="sp-square with-description">
    <div class="sp-logo">
        <img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/sponsor_web_logos/NVIDIA_Logo_V_ForScreen_ForLightBG_gSYoEsz.png" alt="NVIDIA Logo">
    </div>
    <div class="sp-description">
          Since its founding in 1993, NVIDIA has been a pioneer in accelerated computing. The company’s invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling industrial digitalization across markets. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.
    </div>
</a>
</div>

