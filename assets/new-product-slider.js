(()=>{$(document).ready(function(){$(".new-product-slider__products-block--{{ section.id }}").slick({arrows:!1,slidesToShow:1,variableWidth:!0,lazyLoad:"progressive",swipeToSlide:!0,mobileFirst:!0})});function o(e){return new Promise(t=>{if(document.querySelector(e))return t(document.querySelector(e));let r=new MutationObserver(n=>{document.querySelector(e)&&(r.disconnect(),t(document.querySelector(e)))});r.observe(document.body,{childList:!0,subtree:!0})})}o(".stamped-badge").then(()=>{document.querySelectorAll(".stamped-product-reviews-badge ").forEach(t=>{let r=t.querySelector(".stamped-badge");r&&(t.textContent=r.dataset.rating)})}).catch(e=>console.log("Error fetching reviews rating: ",e));})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NodW5rcy9zY3JpcHRzL25ldy1wcm9kdWN0LXNsaWRlci5qcyJdLAogICJtYXBwaW5ncyI6ICJNQUFBLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBWSxDQUM3QixFQUFFLHVEQUF1RCxFQUFFLE1BQU0sQ0FDaEUsT0FBUSxHQUNSLGFBQWMsRUFDZCxjQUFlLEdBQ2YsU0FBVSxjQUNWLGFBQWMsR0FDZCxZQUFhLEVBQ2QsQ0FBQyxDQUNGLENBQUMsRUFFRCxTQUFTQSxFQUFZQyxFQUFVLENBQzlCLE9BQU8sSUFBSSxRQUFTQyxHQUFZLENBQy9CLEdBQUksU0FBUyxjQUFjRCxDQUFRLEVBQ2xDLE9BQU9DLEVBQVEsU0FBUyxjQUFjRCxDQUFRLENBQUMsRUFFaEQsSUFBTUUsRUFBVyxJQUFJLGlCQUFrQkMsR0FBYyxDQUNoRCxTQUFTLGNBQWNILENBQVEsSUFDbENFLEVBQVMsV0FBVyxFQUNwQkQsRUFBUSxTQUFTLGNBQWNELENBQVEsQ0FBQyxFQUUxQyxDQUFDLEVBQ0RFLEVBQVMsUUFBUSxTQUFTLEtBQU0sQ0FDL0IsVUFBVyxHQUNYLFFBQVMsRUFDVixDQUFDLENBQ0YsQ0FBQyxDQUNGLENBRUFILEVBQVksZ0JBQWdCLEVBQzFCLEtBQUssSUFBTSxDQUNLLFNBQVMsaUJBQWlCLGlDQUFpQyxFQUNqRSxRQUFTSyxHQUFZLENBQzlCLElBQU1DLEVBQWFELEVBQVEsY0FBYyxnQkFBZ0IsRUFFcERDLElBRUxELEVBQVEsWUFBY0MsRUFBVyxRQUFRLE9BQzFDLENBQUMsQ0FDRixDQUFDLEVBQ0EsTUFBT0MsR0FBVSxRQUFRLElBQUksa0NBQW1DQSxDQUFLLENBQUMiLAogICJuYW1lcyI6IFsid2FpdEZvckVsZW0iLCAic2VsZWN0b3IiLCAicmVzb2x2ZSIsICJvYnNlcnZlciIsICJtdXRhdGlvbnMiLCAiZWxlbWVudCIsICJyYXRpbmdTcGFuIiwgImVycm9yIl0KfQo=
