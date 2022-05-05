interface styleProps {
  width?: string | number
  height?: string | number
}

const Corner = ({ width = '10px', height = '10px'}: styleProps) => (<div>
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 28 28" enable-background="new 0 0 28 28">
    <path fill="#ED225D" stroke="#ED225D" stroke-miterlimit="10" d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48  l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"/>
  </svg>
</div>)

export default Corner;
