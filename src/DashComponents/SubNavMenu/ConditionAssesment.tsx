import Badges from "../Badges"

function ConditionAssesment() {
  return (
    <>
    <div  className="m-5 flex gap-2">
      <Badges style="success" variant="solid">Success</Badges>
      <Badges style="alert" variant="solid">Success</Badges>
      <Badges style="danger" variant="solid">Success</Badges>
      <Badges style="light" variant="solid">Success</Badges>
      <Badges style="neutral" variant="solid">Success</Badges>
      
    </div>
    <div  className="m-5 flex gap-2">
    <Badges style="success" variant="outline">Success</Badges>
    <Badges style="alert" variant="outline">Success</Badges>
    <Badges style="danger" variant="outline">Success</Badges>
    <Badges style="light" variant="outline">Success</Badges>
    <Badges style="neutral" variant="outline">Success</Badges>
    
  </div>
  <div className="m-5 flex gap-2">
  <Badges style="success" variant="semitransparent">Success</Badges>
  <Badges style="alert" variant="semitransparent">Success</Badges>
  <Badges style="danger" variant="semitransparent">Success</Badges>
  <Badges style="light" variant="semitransparent">Success</Badges>
  <Badges style="neutral" variant="semitransparent">Success</Badges>
  
</div>
    </>
    
  )
}

export default ConditionAssesment
